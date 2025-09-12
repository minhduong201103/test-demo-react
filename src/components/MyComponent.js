// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const MyComponent = (props) => {

    const [listUser, setlistUser] = useState(
        [
            { id: 1, name: "Dương Nhật Minh", age: "16" },
            { id: 2, name: "Minh Bo", age: "26" },
            { id: 3, name: "Minh Duong", age: "69" },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setlistUser([userObj, ...listUser])
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setlistUser(listUserClone)
    }
    return (
        <>
            <br></br>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}

                />
                <br></br>
                <DisplayInfor
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                />

            </div>
            <div className="b">

            </div>
        </>
    )
}
export default MyComponent;