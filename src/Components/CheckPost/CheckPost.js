import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';

const CheckPost = () => {
    const [admin, setAdmin] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
console.log(admin);
    useEffect(() => {
        const url = 'https://blogger-dairies.herokuapp.com/admin?email=' + loggedInUser.email
        fetch(url)
        .then(res => res.json())
        .then(data => setAdmin(data[0]))
    }, [])
    return (
        <div>
            {
               admin.email ? <Dashboard/> :  <Home/>
            }
        </div>
    );
};

export default CheckPost;