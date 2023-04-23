# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a PostgreSQL database.

![simple-demo-gif](https://user-images.githubusercontent.com/114053788/233816541-74b8e2ab-c7f0-43b3-adb9-fd2016c4db08.gif)


## Dependencies
- [Node v16.18.0](https://nodejs.org/en)
- [Axios ^0.20.0](https://www.npmjs.com/package/axios)
- [Classnames ^2.2.6](https://www.npmjs.com/package/classnames)
- [Normalize.css ^8.0.1](https://www.npmjs.com/package/normalize.css)
- [React ^16.9.0](https://www.npmjs.com/package/react)
- [React-dom ^16.9.0](https://www.npmjs.com/package/react-dom)
- [React-scripts 3.4.4](https://www.npmjs.com/package/react-scripts)
- [Prop-types ^15.8.1](https://www.npmjs.com/package/prop-types)
- [Sass ^1.53.0](https://www.npmjs.com/package/sass)
- [Cypress 9.7.0](https://www.npmjs.com/package/cypress) (if intending to run E2E tests)
- [Storybook ^5.0.10](https://storybook.js.org/)
- [Babel-loader 8.1.0](https://www.npmjs.com/package/babel-loader)
- [Babel/core ^7.4.3](https://www.npmjs.com/package/@babel/core)
- [Testing-library/react ^8.0.7](https://www.npmjs.com/package/@testing-library/react)
- [Testing-library/react-hooks ^8.0.1](https://www.npmjs.com/package/@testing-library/react-hooks)
- [Testing-library/jest-dom ^4.0.0](https://www.npmjs.com/package/@testing-library/jest-dom)


## Setup

1. Clone this repo onto your local environment
2. `cd` into the root of this directory
3. Install dependencies with the command:  
```sh
npm install
```
4. Follow the instructions to install and run the API server [here](https://github.com/MediumChaiLatte2Sugars/scheduler-api)

> To ensure that you don't run into any trouble with CORS, immediately following this step include a proxy field to your `package.json` in the scheduler directory (not the API server) like so:

```json
{
  proxy: "http://localhost:8001"
}
```
5. Choose one of the paths below to run the desired functionality 
> At the bare minimum, you will require two terminal windows for basic app functionality, with an optional third for testing suites:
- the first terminal running the main app
- the second terminal running the API server
- (optional) the third window running the desired testing suite

## Running Webpack Development Server (Main App)
In a terminal window, in the root directory of this application, run the following command:

```sh
npm start
```

## Running Jest Test Framework (Testing)
In a terminal window, in the root directory of this application, run the following command:

```sh
npm test
```

## Running Storybook Visual Testbed (Testing)
In a terminal window, in the root directory of this application, run the following command:

```sh
npm run storybook
```

## Running Cypress Test Tool (Testing)

1. In the APi server terminal window run the command 
```sh
npm test:server
```
> This ensures that the API server is primed with the required test data to pass the current tests
2. In a separate terminal window, in the root directory of this application, run cypress using the command:

```sh
npm run cypress
```

## Demos 

### Happy path:

https://user-images.githubusercontent.com/114053788/233816645-ed7efc7d-bea4-42ee-a34d-bae2c16f805b.mp4

### Errors:

#### Form input
![form-error-demo](https://user-images.githubusercontent.com/114053788/233816936-537e735b-527b-46a0-bf1d-097bd7ffe931.gif)

#### Saving
![save-error-demo](https://user-images.githubusercontent.com/114053788/233816950-42a8f434-6a70-4d8d-8db4-30640054281b.gif)

#### Deleting
![delete-error-demo](https://user-images.githubusercontent.com/114053788/233816961-a5752931-ab02-44e9-be2d-b9c6a5a1fd04.gif)




## Troubleshooting (General Case)

The following troubleshooting guide will only address general issues that may arise in your installation.

> **Main app (Webpack server) won't start?**
1. Verify all dependencies are correctly installed
2. Verify that the API server is also running **in a separate terminal window**
3. Verify that all files contained in this repo are present and named accordingly
4. Verify that the command `npm start` is used in the root directory of this project's directory in it's own terminal window (**in addition to the API server**)

>**Jest Test Framework won't start?**
1. Verify all dependencies are correctly installed
2. Verify that the API server is also running **in a separate terminal window**
3. Verify that all files contained in this repo are present and named accordingly
4. Verify that the command `npm test` is used in the root directory of this project's directory in it's own terminal window (**in addition to the API server**)

>**Storybook Visual Testbed won't start?**
1. Verify all dependencies are correctly installed
2. Verify that the API server is also running **in a separate terminal window**
3. Verify that all files contained in this repo are present and named accordingly
4. Verify that the command `npm run storybook` is used in the root directory of this project's directory in it's own terminal window (**in addition to the API server**)

>**Cyress won't start?**
1. Verify all dependencies are correctly installed
2. Verify that the API server is also running **in a separate terminal window**
3. Verify that all files contained in this repo are present and named accordingly
4. Verify that the command `npm run cypress` is used in the root directory of this project's directory in it's own terminal window (**in addition to the API server**)

For all other issues not covered by this guide, consider submitting an issue [here](https://github.com/MediumChaiLatte2Sugars/scheduler/issues)

