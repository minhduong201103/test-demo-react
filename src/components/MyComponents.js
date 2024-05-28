import React from "react";
import AddUserinfo from "./AddUserinfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dương Nhật Minh", age: "16" },
            { id: 2, name: "Minh Bo", age: "21" },
            { id: 3, name: "Nhật Minh", age: "20" }
        ]
    }

    handleAddNewUser = (userobj) => {
        console.log("check data from parent: ", userobj)
        this.setState({
            listUser: [userobj, ...this.state.listUser]
        })
    }


    render() {
        //DRY: don't repeat yourself
        return (
            <>
                <div className="a">
                    <AddUserinfo
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <DisplayInfo
                        listUser={this.state.listUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}
export default MyComponent;




