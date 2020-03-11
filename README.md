## About the app

### Brief

In this exercise you will develop a web application that integrates with the [NASA Image and Video Library API](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf).
It should allow users to search for assets and then select and view an asset.

#### Example
Please visit the demo app ;-)
[carloscastillop.gitlab.io/nasa-assets-search-react/](https://carloscastillop.gitlab.io/nasa-assets-search-react/)

-------------
## Next Steps

#### Homepage (/)
- Show a lisf of assests visited in the browser. Using Local storage show last 10 visited assets.
- Add history push with the current search (ex: /?q=apollo), 
within this, is possible to share the search triggering the seach on load
- For video files, on mouse hover loads a video preview 
- Lazyload for images and thumbs
- Handle if assest fail on load. Sometimes assets come with status 403 from api.

#### Asset detail page (asset/:id)
- Link keywords to make related search in the Asset page
- Add social Share links
- Add to my favourites, save list of assets Ids using Local storage.
- Add image gallery icon for multiple images and react gallery image as well

#### Tests
- Full unit tests
- E2E test (testcafe)


-------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `testcafe chrome test/e2e.js`
Launches the E2E test runner usng Testcafe. 
[Visit documentation](https://devexpress.github.io/testcafe/documentation/getting-started/) for more information.

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


