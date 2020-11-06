# Github GraphQL API Issue Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Set .env file

Get a token for your Github account.

Create a .env file and add your token in the below variable:
REACT_APP_GITHUB_API_KEY=<Token Here>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run codegen`
Generates all GraphQL Types. 

### Limitations
The Github API requires complete words for searching, so one would need to type "test" and not tes to get results. 