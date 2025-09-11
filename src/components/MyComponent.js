// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dương Nhật Minh", age: "16" },
            { id: 2, name: "Minh Bo", age: "26" },
            { id: 3, name: "Minh Duong", age: "69" },
        ]
    }

    // JSX
    render() {
        // DRY: Don't repeat yourseft
        return (
            <div>
                <UserInfor />
                <br></br>

                <DisplayInfor
                    listUser={this.state.listUser}
                />

            </div>
        );
    }
}
export default MyComponent;