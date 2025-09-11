import React, { use } from "react";

class DisplayInfor extends React.Component {
    render() {
        // Destructuring array/object
        const { listUser } = this.props; // object
        // console.log(this.props)
        // props => viết tắt của properties 
        return (
            <div>
                {listUser.map((user,index) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name} </div>
                            <div>My age's {user.age} </div>
                            <hr />
                        </div>
                    );
                })}
                {/* <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor;