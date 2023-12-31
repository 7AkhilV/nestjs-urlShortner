<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

The NestJS URL Shortener is a web application that allows authenticated users to shorten URLs securely. 
It incorporates authentication features, password hashing, and token-based authentication for added security.

## Features

- **User Authentication:**
  - Register a new user with a username, email, and password.
  - Log in with email and password.

- **URL Shortening:**
  - Shorten a URL by providing the full URL.
  - Retrieve the shortened URL based on the short code.
  - Accessible only to authenticated users. 
 
- **Frontend:**
  - Static HTML served with EJS.
  - Minimal yet functional user interface.

- **Security Measures**
  - Passwords are securely hashed using bcrypt.
  - Token-based authentication is implemented using JWT

## Installation

```bash
$ npm install
```
## Env configuration
Update the environment variables in the `.env` file.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

The application will be accessible at http://localhost:3000.
```
## API Endpoints
- **Authentication:**
  - POST `/auth/signup`: Register a new user (requires username, email, password).
  - POST `/auth/login`: Log in (requires email and password).
  -
- **URL Shortening:**
  - GET `/shortUrl`: Get all the shorten Urls.
  - POST `/shortUrls`: Shorten a URL (requires fullURL).
  - GET `/shortUrls/:shortCode`: Retrieve a shortened URL.

## Demo Video

A demonstration of the application is available in the [demo video](https://youtu.be/dOkjHcGiCDs).

## Special Considerations

I utilized AI tools, specifically ChatGPT, during the development of this application. ChatGPT assisted me with error solving throughout the backend and frontend codebase. It provided the basic structure of the GitHub README file and also the basic structure of HTML and CSS in the frontend. 

```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
