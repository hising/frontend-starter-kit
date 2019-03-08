# Opinionated Frontend Starter Kit

**TypeScript, Babel, Webpack, React, Mobx, AntD**

## Getting started

-   Clone the repository

```
git clone https://github.com/hising/frontend-starter-kit.git <project_name>
```

-   Install dependencies

```
cd <project_name>
npm install
npm run dev
```

App accessible at http://localhost:3000

## Tools included

-   Webpack
    -   HTML Webpack Plugin
    -   Mini CSS Extract Plugin
    -   Webpack Dev Server
    -   Sass/Scss/Css/Style-loader
-   Babel
    -   React
    -   TypeScript
    -   Decorators
    -   Class Properties
    -   Async/Await
    -   Object Spread Operator
-   React
    -   React Hot Loader
-   MobX
    -   Decorators
    -   Mobx For React
    -   React Router
-   TypeScript
-   Prettier
-   Jest
-   Tslint
-   Ant Design

## TODO

-   [x] Add commit-hooks (Prettier, Jest) with Husky
-   [ ] Create base models that hook up CRUD agains REST-API
-   [x] Optimize Bundle Size
-   [x] Add Webpack Analyze tools
-   [ ] Create a RootStore that has all other Stores as props
-   [x] Use Fetch instead of Axios
-   [ ] Check if DevServer port is taken, if so, grab next free
-   [x] Add PostCSS loader
-   [ ] Make Ant Design Optional
-   [ ] Create a starter script for config
-   [ ] Add CircleCI build config

## Contribute

Clone repo, do your magic, create a Pull Request
