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
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}
export default MyComponent;