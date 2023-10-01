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
