const heading = React.createElement("div", {id:'parent'}, 
React.createElement("div", {id:'child'}, 
[React.createElement("h1", {id:'parent'}, "hello world from react h1"),
React.createElement("h2", {id:'parent'}, "hello world from react h2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);