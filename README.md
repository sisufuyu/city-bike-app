# Helsinki City Bike App

This is a Helsinki city bike app. This project is for [Solita Dev Academy pre-assignment](https://github.com/solita/dev-academy-2023-exercise).
I created a server implementation in the [city-bike-api](https://github.com/sisufuyu/city-bike-api) repository.

## Built With

This project is built with following technologies:
* ![React](https://img.shields.io/badge/React-20232a.svg?logo=react&logoColor=61DAFB)
* ![Material](https://img.shields.io/badge/Material ui-0081CB.svg?logo=material-ui&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)

## Getting started
1. Clone this repository
2. Install NPM packages
```bash
$ npm install
```
3. Run the server as instructed in [city-bike-api](https://github.com/sisufuyu/city-bike-api).
4. Runs the app in the development mode.
```bash
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test

This app uses Cypress for e2e testing. Cypress tests do not start the system when they are run. 
1. Run this app
```bash
$ npm start
```
3. Run the server in test mode as instructed in [city-bike-api](https://github.com/sisufuyu/city-bike-api) repository.
4. Run Cypress
```bash
$ npm run cypress:open
```
5. Choose E2E Testing\
![image](https://github.com/sisufuyu/city-bike-app/assets/20355911/8ae044d3-de25-4711-b8a5-a103c852384c)
6.Choose your preferred browser for E2E testing\
![image](https://github.com/sisufuyu/city-bike-app/assets/20355911/ea661dbe-30ce-4145-bc73-27ab5c76b0ab)
7. Click helsinki_city_bike_app.cy.ts and run test\
![image](https://github.com/sisufuyu/city-bike-app/assets/20355911/c598fc70-4861-48c0-a50b-65a867a1636c)

### Build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
