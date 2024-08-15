import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const formData = new FormData();

        if (req.body.file) {
            formData.append('file', req.body.file);
        } else {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        try {
            console.log('passei aqui');
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('File upload failed.');
            }

            const result = await response.json();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'deu errado!' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
