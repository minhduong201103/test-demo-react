import React from "react";
import UserInfo from "./Userinfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dương Nhật Minh", age: "21" },
            { id: 2, name: "Minh Bo", age: "21" },
            { id: 3, name: "Nhật Minh", age: "66" }
        ]
    }


    render() {
        //DRY: don't repeat yourself
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo
                    listUser={this.state.listUser}

                />
            </div>
        );
    }
}
export default MyComponent;




