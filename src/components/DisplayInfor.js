import React, { use } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         console.log(">>call constructor: 1")
//         super(props);

//         // babel compiler
//         this.state = {

//             isShowListUser: true
//         }
//     }

//     render() {
//         console.log('call me render')
//         // Destructuring array/object
//         const { listUser } = this.props; // object
//         console.log(listUser)
//         console.table(listUser)
//         // props => viết tắt của properties 
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <div>
//                         {listUser.map((user, index) => {
//                             console.log("check map user", user)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's {user.name} </div>
//                                         <div>My age's {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
//                                     </div>

//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 }

//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props; // object              
    return (
        <div className="display-info-container">
            {true &&
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
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
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