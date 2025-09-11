// 2 cách viết component
// class component
// function component
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    // JSX
    render() {
        return (
            <div>
                <UserInfor />
            </div>
        );
    }
}
export default MyComponent;