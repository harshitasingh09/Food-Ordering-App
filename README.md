#Parcel
- build dec
- HMR= Hot Module Replacement
- Local Server 
- faster bulids by caching
- image optimisation
- minification
- bundling 
- differential bundling to support older browsers
- consistant hashing
- error handling 
- diagnostics
- tree shaking - remove unused code 
- HTTPs
- File watching algo



# JSX
- it is not html inside javascript
- it looks like html/xml.
- browser/ js engine do not understand jsx , they can read only ES6.
- parcel transpile the jsx code
- babel helps to convert the transpiled code into browser/JS engine understandable code.
- jsx get converted into React.createElement - Js object => html element (render).

# Babel
- it is a javascript compiler.
- jsx get converted into React.createElement - Js object => html element (render) by babel.
- transpilation for older version browsers.
- jsx is wriitten in ( ) because babel need to understand the starting and ending of jsx.


# Components
- Class based component - older way
- functional component - just a normal javasrcipt function that return jsx.

# Hooks
- normal javascript functions.
- utilities- reasy to use
- useState: gives react variables to manage the updates made by events.


# useState
- as soon as the react find the "state" is updated it starts the diff algo abd compare the old virtual DOM and New virtual DOM and rerender the DOM.
- this state is updated with the use of set method provided by useState hook.
- whenever a state of a component get updated, react triggers a reconciliation cycle(rerenders the component).

# useEffect
- if no dependency in the useEffect, it is called on every render
- if the dependency array is empty [], then useEffect is called on only for initial render.
- if the depencency array is there, the useEffect would be called as many time there would be any change in dependency array.

# Link- (given by react router dom)
- navigate to next page without reloading the page


# Routing types
- Server Side Routing
- client Side Routing

# Optimisation of app
- coustom hook
- lazy Loading // chunking// dynamic import
- single responsiblility

# Higher Order Components
- they are normal javascript function that take other component as input(props) and return a new component with enhanced features or functionality.

# State Lifting
- managing state of children from parent component.
- State lifting helps maintain a single source of truth for the data, making it more predictable and easier to manage
- this often leads to controlled component as parent is ms=anaging children component's state.