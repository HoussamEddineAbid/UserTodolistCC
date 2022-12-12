import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import ListTodo from './ListTodo';



export default function Accueil() {
    return (
        <div>
            {/* Accueil */}
            <h1>MAIN PAGE OF THE USERS AND BUTTONS</h1>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                {/* Route n'est pas Appliquer aux APP  */}
                <Route path='/DetailUser/:id' element={<DetailUser />} /><Route path='/ListTodo/:id' element={<ListTodo/>} />
            </Routes>
        </div>
    )
}