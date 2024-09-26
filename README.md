# Project-2 SocialSync

![License: MIT](https://img.shields.io/badge/License-MIT-blue)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributors)
- [Questions](#questions)

## Technologies Used

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Expres.js, TypeScript
- Database: PostgreSQL with Sequelize ORM
- Authentication: JWT (JSON Web Token)
- Deployment: Render (Full-Stack development)
- Styling: CSS

## Description

SocialSync is an application that enables users to create and organize social events such as potlucks, camping trips, reunions, and more. Additionally, it provides real-time weather information for the event’s location, helping users plan effectively. We developed this idea to enhance community engagement and simplify the process of organizing gatherings for friends and family. By consolidating all the necessary event details, including weather updates, this application offers a convenient, all-in-one solution for event planning.

## Features

- User Authentication: Signup, login, and profile management with JWT authentication.
- Event Creation: Users can create and manage their events.
- Event Browsing: Discover and browse upcoming events in the community.
- Responsive Design: Fully responsive UI for optimal user experience across devices.

## Installation

1. Clone the repository: Open a terminal and run the following command to clone the project:

    ```
    git clone https://github.com/your-username/socialsync.git
    ```

2. Navigate to the project directory:

    ```
    cd SocialSync
    ```

3. Install dependencies:
    - For the client:

    ```
    cd client
    npm install
    ```

    - For the server:

    ```
    cd ../server
    npm install
    ```

4. Set up environment variables: In the server directory, create a .env file and add your PostgreSQL and JWT secret key:

    ```
    DB_NAME='database_name'
    DB_USER='postgres'
    DB_PASSWORD='your_password'
    JWT_SECRET_KEY='your_secret_key'
    ```

5. Set up the database: Run the following commands in the server directory to seed the database:

    ```
    npm run seed
    ```

6. Build the dist folder: Run the following commands in the client directory and in the server directory:

    ```
    npm run build
    ```

7. Run the development server: Start both the client and server applications:

    ```
    npm run start:dev
    ```

SocialSync should now be running locally at http://localhost:3000.

## Usage

1. Signup/Login:

- New users can sign up by providing an email and password.
- Returning users can log in using their credentials.
- Authentication is secured via JWT.

2. Browse Events:

- Users can browse upcoming community events.
- Each event displays details such as the title, date, location, description, and weather.

3. Create Events:

- Logged-in users can create new events by providing the event's title, date, location, and other necessary details.
- Events created by a user can be viewed and managed under their profile.

The following animation shows the web application's appearance and functionality:

![Alt text](client/src/assets/images/Demo.gif)

## License

MIT License

Copyright (c) 2024 ASgithub11

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors

- Kayla Hebertson Github: https://github.com/kaylahebertson

- Keith Amadeus Github: https://github.com/keithamadeus

## Questions

If you have any questions, reach me on Github: https://github.com/ASgithub11

or email me here at aishasiddiqa151@gmail.com
