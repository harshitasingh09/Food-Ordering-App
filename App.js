import React from 'react';
import ReactDOM from "react-dom/client"


const title=(
<h1>React a new journey</h1>
);
const Title1=()=>{
    return <h1>React a new journey</h1>
};

const ReactComp=()=>{
    return (
        <div>
{title}
<Title1/>
{console.log('hello')}
        </div>
    )
}


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<ReactComp/>);

