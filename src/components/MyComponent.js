// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
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

    handleOnChangeInput = (event) => {
        this.setState ({
            name: event.target.value
        })

    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;