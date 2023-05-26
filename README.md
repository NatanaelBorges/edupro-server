<div  id="top"></div>
<h1  align="center">
<img src="https://res.cloudinary.com/dpf6scfvx/image/upload/v1685076951/undraw_server_cluster_jwwq_ije80u.svg" alt="EduPro" width="600">
</h1>

<p  align="center">
<strong>
EduPro 🎭
</strong>
</p>

<p  align="center">
The Employee Project is an open source project written in Nest
</p>

<p  align="center">
The objective of this project is to implement some of the most used technologies in the market in a single project, creating a whole new web of knowledge and several possibilities to improve your learning.
</p>
<br>
<h4  align="center"> 🚧 EduPro - Server 🚀 Under construction... 🚧 </h4>

<br>
<p  align="center">
<a  href="https://github.com/NatanaelBorges/edupro-server/blob/main/LICENSE">
<img  alt="GitHub"  src="https://img.shields.io/github/license/NatanaelBorges/edupro-server"  alt="EduPro-Server is released under the MIT license.">
</a>
<a  href="https://github.com/NatanaelBorges/edupro-server/blob/main/CHANGELOG.md">
<img  alt="package.json version"  src="https://img.shields.io/github/package-json/v/NatanaelBorges/edupro-server">
</a>
<a  href="https://github.com/NatanaelBorges/edupro-server/blob/main/CONTRIBUTION-pt_BR.md">
<img  src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"  alt="PRs welcome!" />
</a>
<a  href="https://github.com/NatanaelBorges/edupro-server/commits/main">
<img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/NatanaelBorges/edupro-server">
</a>
</p>

<p  align="center">
<a  href="#about-this-project-">About this Project</a> •
<a  href="#why-%EF%B8%8F">Why?</a> •
<a  href="#architecture-">Architecture</a> •
<a  href="#technologies-">Start in 5 minutes</a> •
<a  href="#release-notes-">Release notes</a> •
<a  href="#disclaimer-">Disclaimer-</a> •
<a  href="#contributing-">Contributing</a> •
<a  href="#license-">License</a>
</p>

English 🇺🇸 | [Português 🇧🇷](./README-pt_BR.md)

## Give a star!⭐

If you liked the project, or EduPro helped you in any way, please give it a star, it helps a lot to keep the content updated and thus enabling the creation of new projects 😉

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## About this Project 👨‍🏫

*EduPro* is a robust RESTful API built on clean architecture principles, implemented in TypeScript and leveraging CQRS (Command Query Responsibility Segregation). It is specifically designed to streamline the management of student data for educational institutions, including schools and universities.

The application offers a wide range of features, such as secure user authentication, comprehensive CRUD operations for managing students, courses, and grades.

Developed using Node.js and the powerful NestJS framework for the backend, *EduPro* utilizes the reliability and efficiency of MySQL as its database technology, seamlessly integrated through the use of TypeORM. This combination ensures optimal data storage and management capabilities.

With a well-architected, secure, and high-performance design, *EduPro* is a dependable and scalable solution, catering to the diverse needs of any academic institution.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Why? 🤷‍♂️

Thank you for taking the time to review this project, which is a addition to my personal portfolio. I would greatly appreciate any feedback you can provide regarding the project, its code, structure, or any other aspect that you believe would help me become a better developer.

Please feel free to reach out to me via email at <contact@natanaelborges.com> or connect with me on
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/natanael-borges/)](https://www.linkedin.com/in/natanael-borges/).

Furthermore, I encourage you to utilize this project in any way that suits your needs, whether it be for studying, making improvements, or even for commercial purposes.

It is entirely free to use!

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Architecture 🕍

- Full architecture with responsibility separation concerns, SOLID and Clean Code
- Domain Driven Design (Layers and Domain Model Pattern)
- Domain Events
- Domain Notification
- Domain Validations
- CQRS (Imediate Consistency)
- Event Sourcing
- Unit of Work
- Repository

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Technologies 🛠

The following tools were used in building the project:

- **[NodeJS](https://nodejs.org/en/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[NestJs](https://nestjs.com/)**
- **[TypeORM](https://typeorm.io/)**
- **[Husky](https://www.npmjs.com/package/husky)**
- **[Jest.js](https://jestjs.io/)**
- **[ESLint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[TS-node](https://typestrong.org/ts-node/)**
- **[MySQL](https://www.mysql.com/)**
- **[Release-it](https://github.com/release-it/release-it)**
- **[nodemon](https://nodemon.io/)**
- **[dotenv](https://github.com/motdotla/dotenv)**

## Getting Started

### How to run the project 🚀

Before starting, you will need to have the following tools installed on your machine: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/). Besides, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

### Running the Back End (server) 🎲

```bash
# Clone this repository
$ git clone https://github.com/NatanaelBorges/edupro-server.git

# Access the project folder in terminal/cmd
$ cd edupro-server

# Install the dependencies
$ npm install
# or
$ yarn

# Rename the file `.env.example` to `.env` and create yours environment variables and replace them. It's is very important for running the server.
$ mv .env-example .env

# Run the migration in development mode
$ npm run m:run
# or
$ yarn m:run

# Run the application in development mode
$ npm run start:dev
# or
$ yarn start:dev

# The server will start on port:3000 - access http://localhost:3000
```

> See the **scripts {}** part of the file [package.json](https://github.com/NatanaelBorges/edupro-server/blob/main/package.json) to find out which scripts are available.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

### Running the tests

```
npm run test
```

*or*

```
yarn test
```

### Running the tests + Coverage

```
npm run test:coverage
```

*or*

```
yarn test:coverage
```

### Generating migration

```
npm run m:gen --name=initialDatabase
```

*or*

```
yarn m:gen --name=initialDatabase
```

### Running migration

```
npm run m:run
```

*or*

```
yarn m:run
```

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Release notes 🚢

Want to know what we've shipped recently? Check out our  [changelog](https://github.com/NatanaelBorges/edupro-server/blob/main/CHANGELOG.md)  for key highlights, performance improvements, new features and notable bug fixes.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Disclaimer ⛔

- **NOT**  intended to be a definitive solution
- Beware to use in production way
- Maybe you don't need a lot of implementations that is included, try avoid the  **over engineering**

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## Contributing 🤝

This project is for study purposes, but we want to keep evolving to, in a way, try to improve people's knowledge. You can submit as many PR's as you like, we'll be happy to review and accept them!

All kinds of contributions are most welcome and appreciated!

- ⭐️  Star in the project;
- 🐛  Find and report issues;
- 📥  Submit PRs to help resolve issues or add features.

<p  align="right">(<a  href="#top"> back to the top </a>)</p>

## License 📝

This project is licensed under the MIT License - see the [MIT license](https://github.com/NatanaelBorges/edupro-server/blob/main/LICENSE) file for details.

## Thanks 💙

We thank everyone who somehow makes the project better every day and very special, thus helping us to bring knowledge to many people in a practical, fast and pleasant way.

Made with  ❤️  by  _**Natanael Borges**_  👋🏽

<p  align="right">(<a  href="#top"> back to the top </a>)</p>
