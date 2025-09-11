// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    // JSX
    render() {
        const myInfor = ['a', 'b', 'c']
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="Dương Nhật Minh" age="25" />
                <hr />
                <DisplayInfor name="Minh Bo" age={27} myInfor={myInfor} />
            </div>
        );
    }
}
export default MyComponent;