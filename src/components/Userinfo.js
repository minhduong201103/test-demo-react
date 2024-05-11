import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Minh',
        age: 21,
        address: 'HN'
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
        console.log(this.state)
    }

    render() {
        return(
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

export default UserInfo;