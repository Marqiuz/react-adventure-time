# Adventure Time 
Welcome to Adventure Time.
The app is a blog system where travelers can share their exciting adventures.

## Public Part 
**Accessible to everyone without authentication**
Guests can
* view About page
* view Welcome page
* view all Adventure page with posts and details
* perform search
* Register 
* Login (if already has an account)

## Private Part 
**Accessible only for logged in users**
Clients can
* view all pages
* can use create adventure page(create posts)
* view his own posts
* edit his own posts
* delete his own posts
* like other adventures posted by another client
* logout

## Administrative  Part
**Accessible only for admins**
**Admin account credentials:**
**username Admin password Admin123**
Admins can
* view all pages
* create new categories for the adventures 
* like other posts 
* delete other posts


## Available Scripts

In the project directory, you can run:

### `npm start`

Initialise with npm i to install dependencies

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `cd server + node .\index.js`
Initialise with npm i to install dependencies

Starts the server

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