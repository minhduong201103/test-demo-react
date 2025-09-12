import React, { use } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log(">>call constructor: 1")
        super(props);

        // babel compiler
        this.state = {

            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('call me component did mount ')
        setTimeout(() => {
            document.title = 'Eric & HoidanIT'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('call me component did update ', this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert('you got 5 user')
            }
        }

    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('call me render')
        // Destructuring array/object
        const { listUser } = this.props; // object
        console.log(listUser)
        console.table(listUser)
        // props => viết tắt của properties 
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                {this.state.isShowListUser &&
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