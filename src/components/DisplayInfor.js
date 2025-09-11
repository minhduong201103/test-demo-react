import React, { use } from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // Destructuring array/object
        const { listUser } = this.props; // object
        console.log(listUser)
        console.table(listUser)
        // props => viết tắt của properties 
        return (
            <div className="display-info-container">
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user, index) => {
                            console.log("check map user", user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'yellow', paddingTop: '50px' }}>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                }
                <div>
                    <button onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide list user: " : "Show list user: "}
                    </button>
                </div>
            </div>
        )
    }
}

export default DisplayInfor;