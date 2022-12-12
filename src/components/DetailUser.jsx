import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id === id)
    return (
        <div>
            {
                selectedUser.map(user => <div  key={user.id}>
                    <div >
                        <img src={user.image} alt={user.firstName}/>
                    </div>
                    <div>
                        <div >
                            <label>Full Name: First name & Last Name </label><span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div >
                            <label>The Age: </label><span>{user.age}</span>
                        </div>
                        <div >
                            <label>Gender: M or F </label><span>{user.gender}</span>
                        </div>
                        <div >
                            <label>The Email: </label><span>{user.email}</span>
                        </div>
                        <div >
                            <label>PHONE NUMBER :# </label><span>{user.phone}</span>
                        </div>
                        <div >
                            <label>User's Weight: </label><span>{user.weight}</span>
                        </div>
                        <div >
                            <label>User's Height: </label><span>{user.height}</span>
                        </div>
                        <div >
                            <label>🎂 Date of birth: </label><span>{user.birthDate}</span>
                        </div>
                        <div >
                            <label>🅱️ Blood Group  </label><span>{user.bloodGroup}</span>
                        </div>
                        <div >
                            <label>👁️ Eye Color: </label><span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}