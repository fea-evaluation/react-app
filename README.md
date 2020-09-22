# react-app > grommet.io

1. [react-app > grommet.io](#react-app--grommetio)
   1. [Observations](#observations)
      1. [grommet](#grommet)
         1. [`findeDOMNode` deprecation warning](#findedomnode-deprecation-warning)
         2. [Data driven API](#data-driven-api)
         3. [Is the Grid component not as flexible as pure CSS?](#is-the-grid-component-not-as-flexible-as-pure-css)
   2. [Create React App](#create-react-app)
      1. [Available Scripts](#available-scripts)
         1. [`yarn start`](#yarn-start)
         2. [`yarn test`](#yarn-test)
         3. [`yarn build`](#yarn-build)
         4. [`yarn eject`](#yarn-eject)
      2. [Learn More](#learn-more)

This project is meant to help evaluating the use of a [styled-components](https://styled-components.com/) UI library, specifically [grommet](https://v2.grommet.io/), in a react application.

## Observations

### grommet

#### `findeDOMNode` deprecation warning

Using any [Box](https://v2.grommet.io/box) based component - There are a lot of them! - produces a deprecation warning in the console:

```plain
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Ref which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node
```

#### Data driven API

You can find a lot of components built around a data driven API, like [List](https://v2.grommet.io/list) and [Meter](https://v2.grommet.io/meter). Data driven component APIs is one pattern I would highly discourage of, because it creates a path of large and compilcated APIs to create the ability of customisation.

As a proof you'll find that the [Meter.values](https://v2.grommet.io/meter#values) property is quite verbose already, trying to provide the flexibility one would assume of a component like that. The [List.data](https://v2.grommet.io/list#data) property creates even more challenges, as a whole collection of other properties have to be enabled to work along that data structure, e.g. [List.children](https://v2.grommet.io/list#children) and [List.itemProps](https://v2.grommet.io/list#itemProps). Additionally teh choice of introducing the properties [List.primaryKey](https://v2.grommet.io/list#primaryKey) and [List.secondaryKey](https://v2.grommet.io/list#secondaryKey) seems like a poor choice, leading down the same road as described before.

Other libraries, like [Semantic UI](https://react.semantic-ui.com/elements/list/#types-bulleted) use a different approach, like the [Compound Component Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks), where instead of rendering child elements automatically base on a set of data, you as a developper create those child elements and have therefore complete control over their customisation.

#### Is the Grid component not as flexible as pure CSS?

I'm not a CSS Grid expert, so all I am right now is sceptical of the [Grid](https://v2.grommet.io/grid) component. I was failing to achieve what I wanted too, which was this:

```javascript
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  align-items: center;
  justify-items: stretch;
  grid-gap: 48px;
  padding: 48px;
  width: 100%;
`;
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
