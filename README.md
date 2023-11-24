# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Doughts

  - out put differs bases on how i place **classname** attribute, to **Square** component or to **button** element 
  - why are all the square components not alligned in a single line
  - regarding showing history when i was using setCurrentMove(history.length-1) 'x' was not displayed
  - when we branch and make changes in the branch, when we chenk other branches in vs code we can see that the changes
      in other branches also but if we cross chech in GH repository we can see that changes are applied to only commited and synced branches only. Is this a refreshing bug of vs code while switching branches? or other reason?
# Findings
  **a prop cannot be a part of a render but a function call is a part of the rendering process** 
    - this can be seen when trying to send handleClick(0) is told to give an error of *exceded rendering limit*.
  **an arrow function can be passed directly as a propo unlike a *function call**
    - when we use functions on containers(like arrays) inside hooks we should mention them in []

# provide game history
  **move the state up from board to game**
    - adding a game component as the default component.
    - adding history state to maintain the history of the game.
    - initilizing a currentState const variable which is used while rendering the state.
  **add a feature to list the previous states of the board**
    - add a orderd list element to game and pass moves as a prop to it.
    - moves gets a list of "go to buttons" using map method on the history state and arrow function.

# using two loops to write the board component instead of hard coding it 
  **using two loops**
    - used two for loops which iterate on row and col.
    - initilized and used three const variables boardrow, boardcol, squareindex.
    - used push() function to push jsx into const variables boardrow, boardcol.
    - rendered the boardrow variable in jsx using {boardrow}
    
