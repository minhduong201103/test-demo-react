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

    handleClick = (event) => {
        console.log(">>Click me my button")
        // console.log("random", Math.floor((Math.random() * 100) + 1))
        this.setState({
            name: 'Minh Bo',
            age: Math.floor((Math.random() * 100) + 1),
        })

    }

    handleOnMouseOver = (event) => {
        console.log(event.pageX)
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick() }}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;