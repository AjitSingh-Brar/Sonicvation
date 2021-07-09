## Sonicvation

Goal: A website which enables users to login securely to access a dashboard, create records/entries that are submitted to a database using a web form, and be able to export those entries to a file that can exported to be stored locally on a device.  Desktop and Tablet responsive as per the requirement.

Necessary Task performed: 
1. Business plan and a Software Requirement Document prepared according to the user needs.
2. Technology Stack:
 a. React as the front-end Library
 b. Redux for the state managment process, which acts as the data layer
 c. Hooks: useState and useEffect used to as it always use functions instead of having to constantly switch between functions, classes, higher-order components, and render 
    props.
 d. Firebase: Being a rising development platform similar to AWS. It is easy to authenticate users, store data and user metadata securely, authorise access to data selectively, and integrate machine learning. Hence, for user authenctication via REST APIs and for the real time database Firebase Firestore was used, which creates a new, more intuitive data model.
 
 ![image](https://user-images.githubusercontent.com/68308589/125019905-ce185b00-e045-11eb-8c9f-71388687f5bd.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
