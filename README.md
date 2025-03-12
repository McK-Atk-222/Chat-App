# Chat App

A simple PERN-stack web application which allows registered users to send messages to each other.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies](#technologies)
- [Support](#support)
- [License](#license)

## Installation

Clone the repository, set up your .env file in root, and build the app.
```sh
git clone https://github.com/McK-Atk-222/Chat-App.git
```

```sh
DATABASE_URL=""
JWT_SECRET=""
NODE_ENV="" //production or development
PORT=5001
```

```sh
npm run build
```

```sh
npm run start
```

## Usage

Chat App is a web application which is used for sending instant messages to other users. New Users can create accounts. Existing users can login. Messages/conversations will persist on the server. Other users online will be indicated by a small green dot on the users avatar. All app users are displayed on the left sidebar. Specific Users can be searched on the top of the sidebar. 
Deployed URL: https://chat-app-t1am.onrender.com

## Testing

Testing can be preformed on the deployed webpage by creating an account in a browser tab and a seperate account in a private browser tab(ex. incognito in chrome) and then sending messages between these seperate created users to test functionality. 

## Technologies

HTML, CSS, TypeScript, JavaScript, PostgreSQL, Express.js, Prisma, Node.js, React, Socket.io, TailwindCSS, daisyUI, Prisma, Zanstand, Toast

## Support

Please [open an issue](https://github.com/McK-Atk-222/Chat-App/issues) for support.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
