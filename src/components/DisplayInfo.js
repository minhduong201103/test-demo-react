import { render } from "@testing-library/react";
import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // console.log(this.props)
        //destructuring array
        //props => Viết tắt properties
        const { listUser } = this.props;
        // console.log(listUser)
        // console.table(listUser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}> 
                    {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user, index) => {
                            console.log("check map user", user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfo;






