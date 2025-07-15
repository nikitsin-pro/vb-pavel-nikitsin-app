# VbPavelNikitsinApp
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Live Demo
The application is available at:
[https://nikitsin-pro.github.io/vb-pavel-nikitsin-app](https://nikitsin-pro.github.io/vb-pavel-nikitsin-app)

## Local Development Setup

### Install Dependencies
Make sure you are using:
- Node.js: **v22.17.0**
- NPM: **10.9.2**

> Note: Angular 20.x and NgRx 19.x may produce peer dependency warnings.
> To install dependencies without errors, use:
```bash
npm install --legacy-peer-deps
```

## Environment Configuration
Before running or building the project locally, you must create `src/environment.ts` file.
This file is excluded from version control and is required to provide your TMDB API key.

### Steps
1. In the project root, create the file: `src/environment.ts`
2. Add the following content, replacing `YOUR_TMDB_API_KEY` with your actual `TMDB API` key:
```ts
export const environment = {
  configuration: 'dev',
  tmdbApiURL: 'https://api.themoviedb.org/3',
  tmdbApiKey: { YOUR_TMDB_API_KEY },
};
```

> **Note:**  
> This setup is required for local development.  
> In CI/CD environments, the `environment.ts` file is generated automatically using secrets stored in GitHub Actions.

## Development server
To start a local development server, run:
```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Building
To build the project run:
```bash
npm run build
```

This command compiles the application and saves the output files in the dist/ folder.

## Running unit tests
To execute unit tests use the following command:
```bash
npm run test
```

## Deployment Notes
To deploy the live demo, you must:
1. Ensure all lint checks and unit tests pass.
  Run locally using:
```bash
  npm run test
  npm run lint
```
2. Push your changes to the `main` branch on GitHub:
