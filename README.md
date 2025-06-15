# codecollab-ai

A real-time collaborative coding environment enhanced with AI assistance, enabling users to work together on projects, chat within the environment, and leverage AI for code generation and suggestions.

## Features and Functionality

*   **Real-time Collaboration:** Multiple users can work on the same project simultaneously, with changes reflected instantly for all participants.
*   **AI Assistance:** An integrated AI assistant (@ai) can generate code snippets, provide suggestions, and answer development-related questions within the project chat.
*   **Project Management:** Users can create, manage, and collaborate on multiple projects.
*   **User Authentication:** Secure user registration and login system.
*   **File Tree Management:**  A file tree structure allows users to organize and manage project files, and persists across sessions.
*   **Code Execution:** The platform utilizes WebContainers to run and preview projects directly within the browser.
*   **Real-time Chat:** Integrated chat functionality for communication and collaboration.

## Technology Stack

*   **Backend:**
    *   Node.js
    *   Express.js
    *   Mongoose (MongoDB ODM)
    *   jsonwebtoken
    *   bcrypt
    *   ioredis
    *   dotenv
    *   Google Generative AI (Gemini 1.5 Flash)
    *   Socket.IO

*   **Frontend:**
    *   React
    *   React Router
    *   Axios
    *   Socket.IO Client
    *   WebContainers API
    *   Markdown-to-jsx
    *   Highlight.js
    *   Remixicon

## Prerequisites

*   Node.js (v18 or higher)
*   npm (or yarn)
*   MongoDB
*   Redis
*   Google Generative AI API Key
*   A `.env` file in the `backend` directory with the following environment variables:

    ```
    MONGODB_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret Key>
    REDIS_HOST=<Your Redis Host>
    REDIS_PORT=<Your Redis Port>
    REDIS_PASSWORD=<Your Redis Password>
    PORT=3000
    GOOGLE_AI_KEY=<Your Google Generative AI API Key>
    VITE_API_URL=http://localhost:3000 # or your production URL
    ```

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Ashutoshgola/codecollab-ai.git
    cd codecollab-ai
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env` file in the `backend` directory and populate it with the required environment variables as described in the [Prerequisites](#prerequisites) section.  Make sure the `VITE_API_URL` in the `.env` file points to the backend address.

4.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

## Usage Guide

1.  **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

2.  **Start the frontend development server:**

    ```bash
    cd frontend
    npm run dev
    ```

3.  **Access the application:**

    Open your browser and navigate to the address where the frontend development server is running (typically `http://localhost:5173`).

4.  **Register or Login:**

    Create a new user account or log in with existing credentials.

5.  **Create a Project:**

    Click the "New Project" button on the home page and enter a project name.

6.  **Collaborate:**

    Share the project with other users by adding them as collaborators.

7.  **Code Together:**

    Edit the project files in real-time with other collaborators.

8.  **Use AI Assistance:**

    Type `@ai <your prompt>` in the chat to get AI-powered code suggestions and answers.

9.  **Run the Project:**

    Click the "run" button in the code editor to execute the project using WebContainers.



## License Information

No license is specified for this project.  All rights are reserved.

## Contact/Support Information

For any questions or support requests, please contact Ashutoshgola through GitHub.
