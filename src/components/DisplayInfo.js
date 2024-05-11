import { render } from "@testing-library/react";
import React from "react";

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props)
        //destructuring array
        //props => Viết tắt properties
        const { listUser } = this.props;
        console.log(listUser)
        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DisplayInfo;






