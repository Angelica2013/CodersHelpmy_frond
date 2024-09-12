## Index 📑  
- [Project Description](#project-description-)  
- [Features](#features-)  
- [Technologies and Libraries Used](#technologies-and-libraries-used-)  
- [Installation](#installation-)  
- [Developer](#developer-)

## Project Description 📖 

This project is a blog designed for users to share experiences and receive support from others. The goal is for registered users to post comments about situations they have experienced, and for others to respond with advice and support. The idea is to create a support network for people facing difficulties who need help managing their situations.

The user interface is built with **React**, and the styling system uses **styled-components** to provide a custom and visually appealing look. Users can register, log in, and once authenticated, they can comment and engage in conversations on the platform.

## Features 📋

- **Registration and Login:** Users can create an account or log in to access blog features.
- **Welcome Home Page:** A supportive message is displayed when users enter the app.
- **Comments and Replies:** Authenticated users can leave comments and reply to others.
- **Support Network:** The app is designed to foster a community where people support each other by sharing their experiences.

### Motivation

This app was created to provide a safe space where people can freely express themselves, share their struggles, and find the support they need through advice and replies from the community.

## Technologies and Libraries Used 🛠️

- **React:** Main library for building the user interface.
- **Axios:** To make HTTP requests to the Django backend.
- **React Router:** To handle navigation within the application.
- **Styled Components:** Used for designing and styling components.
- **Django (in the backend):** Handles user authentication, comment logic, and data management.

## Installation ⚙️

Follow these steps to set up the frontend development environment:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your_username/blog_frontend
   cd blog_frontend

2. **Install the dependencies:**

 ```bash
    `npm install`
    `npm install react-router-dom@6`


3. **Start the application:**

  ```bash
   `npm run dev`

   The application will be available at http://localhost:5173/


## Vite Installation and Test Configuration 🧪

To set up the development environment with Vite and Vitest, follow the steps below:

1. **Create a new project with Vite:**

  If you don't have a project set up with Vite yet, you can create one using the following command:

  ```bash
npm create vite@latest nombre-del-proyecto

2. **Run tests with Vite:**

       `npm run test`

 ### Additional Documentation

For more information on Vite and its advanced configuration, see the official Vite documentation.[Additional Documentation](https://vitejs.dev/).


## Backend Connection (Django)

The React frontend communicates with a backend developed in **Django**. Django handles user authentication, the logic for the destination search form, and manages data related to destinations and itineraries. The connection is made through an API exposed by Django and consumed by the frontend using Axios. **Axios**.

> **Nota:** Details about the Django backend configuration can be found in its own README file.


## Developer 👩‍💻

- **Angelica** - [GitHub](https://github.com/Angelica2013)

