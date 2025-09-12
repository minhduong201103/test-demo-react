import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: 'Hà Nội'
//     }


//     render() {
//         return (

//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hà Nội');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }
    return (
        <div>
            My name is {name} and i'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />

                <label>Your age </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfor;