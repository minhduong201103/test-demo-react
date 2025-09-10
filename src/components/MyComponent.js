// 2 cách viết component
// class component
// function component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Minh',
        age: 22,
        address: 'Hà Nội'
    }

    handleClick(event) {
        console.log(">>Click me my button")
        console.log("My name is")
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;