# 20-03-19 React Conditional Rendering CW
### You should be passing in Items For Sell (the array your defined in state) to the child component to display items. You can't through a function (what you're passing now). The conditional rendering looks solid. Be sure to review state/props/callbacks aka passing info between components. Looks like you did a good job of code a little test a little as well and managed your time will enough to present a semi-wokring version without getting too hung up on your error. Nice job overall.
### Score : 3/5
#### Set Up
- Create a react app called buy-sell-app
- Create a class based component called `AppContainer` that displays an h1 tag with the text `Buy Sell App`
- Reference the `AppContainer` in the `App` component

- Create a class based component called `ListOfItems` that will iterate through an array of itemsForSell objects passed down from the parent component and iterate through an array of itemOffer objects passed down from the parent component
- Reference the the `ListOfItems` component in the `AppContainer` component

#### Forms
- Create a class based component called `Sell` that displays a form with fields product title, product price, and product condition
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Sell` component in the `AppContainer` component

- Create a class based component called `Buy` that displays a form with fields product title, product offer price
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Buy` component in the `AppContainer` component

#### Conditional Rendering
- Add a `Buying` button and a `Selling` button to the `AppContainer` component
- When the `Buying` button is clicked display the `Buy` component
- When the `Selling` button is clicked display the `Sell` component