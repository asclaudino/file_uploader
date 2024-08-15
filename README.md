# File Uploader - Next.js Frontend

This is a simple Next.js frontend application that allows users to upload an image and display the extracted text via OCR (Optical Character Recognition). The backend service handles the OCR processing and returns the extracted text along with the image link.

## Features

- **Image Upload**: Users can upload an image file directly from their browser.
- **OCR Processing**: The uploaded image is sent to the backend service, which processes the image using OCR to extract text.
- **Display Results**: The application displays the uploaded image and the extracted text in a user-friendly format.

## Technologies Used

- **Next.js**: React framework for server-side rendering and building the frontend.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **NPM or Yarn**: A package manager for Node.js.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/asclaudino/file_uploader.git
   cd file_uploader
2. **Install dependencies**:

   ```bash
   npm install
   
3. **Setup Environment Variables**
    ```bash
    touch .env.local
  And paste it: NEXT_PUBLIC_API_URL=http://localhost:8000
  
4. **Running the project**
    To run the development server: 
    ```bash
    npm run dev 
   
