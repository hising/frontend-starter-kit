# Opinionated Frontend Starter Kit

**TypeScript, Babel, Webpack, React, Mobx, AntD**

[![CircleCI](https://circleci.com/gh/hising/frontend-starter-kit/tree/master.svg?style=svg)](https://circleci.com/gh/hising/frontend-starter-kit/tree/master)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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

-   [x] Add commit-hooks (Prettier, Jest) with Husky PR#1
-   [ ] Create base models that hook up CRUD agains REST-API
-   [x] Optimize Bundle Size #4
-   [x] Add Webpack Analyze tools #2
-   [x] Create a RootStore that has all other Stores as props
-   [x] Use Fetch instead of Axios #3
-   [ ] Check if DevServer port is taken, if so, grab next free
-   [x] Add PostCSS loader #5
-   [ ] Make Ant Design Optional
-   [ ] Create a starter script for config
-   [x] Add CircleCI build config
-   [x] Add tests (Jest) #6
-   [ ] Set up a basic event manager for important user and usage events

## Contribute

Clone repo, do your magic, create a Pull Request
