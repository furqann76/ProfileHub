## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

## Features

- **List Users**: View a list of users on the homepage.
- **Add New User**: Form to add a new user with name, email, and age fields.
- **View User Profile**: Each user has a detailed profile page.
- **Responsive Design**: Styled using Bootstrap for a responsive layout.

## Tech Stack

- **Frontend**: Vue.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **HTTP Client**: Axios (for API requests)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MySQL](https://www.mysql.com/)

## Backend Setup

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd webapp
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Create Environment Variables**:
   - Set up a `.env` file to define the MySQL database credentials and other settings, if needed.

4. **Start the Backend Server**:
    ```bash
    node app.js
    ```

   The backend will run on `http://localhost:3000`.

## Frontend Setup

1. **Navigate to Frontend Directory**:
    ```bash
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Frontend Development Server**:
    ```bash
    npm run serve
    ```

   The frontend will run on `http://localhost:8080`.

## Database Setup

1. **Create the MySQL Database**:
   - Open your MySQL client and create a database:
     ```sql
     CREATE DATABASE users_db;
     ```

2. **Create the Users Table**:
   ```sql
   USE users_db;

   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100),
     age INT
   );
   ```

3. **Connect to the Database**:
   - In `app.js`, configure the database connection settings to match your MySQL credentials.

## Project Structure

```
webapp/
├── app.js                 # Backend server setup and routes
├── frontend/              # Vue.js frontend project folder
│   ├── public/            # Public assets
│   ├── src/               # Vue.js source code
│   │   ├── components/    # Vue components
│   │   ├── router/        # Vue Router setup
│   │   ├── App.vue        # Main Vue app component
│   │   └── main.js        # Vue entry file
├── README.md              # Project documentation
└── package.json           # Node.js dependencies
```

## Usage

1. **Home Page**:
   - Displays a list of users with options to view individual profiles or add a new user.

2. **Add New User**:
   - Accessible via the "Add New User" button on the homepage.
   - Form fields: Name, Email, Age.

3. **User Profile Page**:
   - Each user has a profile page accessible via the "View Profile" link on the homepage.

## Future Enhancements

- **Add Search Functionality**: Allow users to search through the list of users.
- **Pagination**: Add pagination for better user experience with a large dataset.
- **User Authentication**: Secure the user data with login and registration functionality.

---

This README provides an overview of the project, setup instructions, and usage guidelines. Feel free to contribute and make improvements!
