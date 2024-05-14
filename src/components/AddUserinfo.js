import React from "react";

class AddUserinfo extends React.Component {
    state = {
        name: '',
        age: 21,
        address: ''
    }

    handleOnName = (name) => {
        this.setState({
            name: name.target.value
        })
    }

    handleOnAge = (age) => {
        this.setState({
            age: age.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                Hi, my name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(name) => this.handleOnName(name)}
                    />
                    <button>Submit</button>
                </form>

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(age) => this.handleOnAge(age)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserinfo;