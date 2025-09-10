// 2 cách viết component
// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    render() {
        return(
            <div>my first component {Math.random()}
            </div>
        );
    }
} 

export default MyComponent;