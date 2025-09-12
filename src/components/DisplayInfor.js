import React, { use, useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

const DisplayInfor = (props) => {
    const { listUser } = props; // object

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    useEffect(
        () => {
            if(listUser.length === 0 ) {
                alert('You delete all the users')
            }
            console.log('call me useffect')
        }, [listUser]
    );
    return (
        <div className="display-info-container">
            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </button>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user, index) => {
                        console.log("check map user", user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete </button>
                                </div>

                                <hr />
                            </div>
                        );
                    })}
                </div>
            }

        </div>
    )
}
export default DisplayInfor;