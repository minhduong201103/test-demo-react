// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dương Nhật Minh", age: "16" },
            { id: 2, name: "Minh Bo", age: "26" },
            { id: 3, name: "Minh Duong", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log("Check data from parent:", userObj)
        this.setState({
            listUser: [userObj,...this.state.listUser]
        })
    }
    // JSX
    render() {
        // DRY: Don't repeat yourseft
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br></br>
                <DisplayInfor
                    listUser={this.state.listUser}
                />

            </div>
        );
    }
}
export default MyComponent;