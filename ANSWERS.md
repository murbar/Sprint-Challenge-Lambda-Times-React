- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

> PropTypes allow us to type check the data we pass into our components. This is more and more important as our application and amount of data being passed between components grows. PropTypes are lightweight and we can drop them into any place in our app that makes sense. They prevent a whole category of bugs and make our app more reliable and easier to maintain.

- [ ] Describe a life-cycle event in React?

> React provides a number of component methods that allow us to hook into different stages of a component's life cycle. The three main phases of a component's life cycle are mounting, updating, and unmounting. We can use `componentDidMount`, for example, to fetch app data from an API after a component is initially rendered on screen, providing a better experience for the user.

- [ ] Explain the details of a Higher Order Component?

> Higher order components are a component composition pattern that allow us to share data and behavior between components without duplicating code. HOCs take in a component as an argument and return a new component with added state/functionality. We can use them as a container for other components that performs some logic to conditionally render those components. Authentication is one use case for this pattern where we render either the app view or a login view based on a check of the user's credentials.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

> Styling in React can be accomplished in a few different ways. There are traditional style sheets and associated tooling (LESS, Sass, PostCSS), we can import a pre-built library of styled components (Reactstrap), or we can roll our own styled components with `styled-components`. There are pros and cons for each and what you'll use will be largely dependent on the nature of the project and the preferences of your team. Styled components allow us to write CSS inside of JS much like we approximate HTML with JSX. This potentially consolidates the state, logic and view of our components into one location or file. Some developers are comfortable with this mixing of technologies and some are not.
