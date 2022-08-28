import React from 'react'
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '../../../components/layout/Sidebar';

const DashBoard = ({route, navigation}) => {
    //let navigate = useNavigate(); 
    //const userId = navigate.userId;
    //sssconst {username} = route.params.username;
    //let location = useLocation();
    //let username = location.state.username;
    const [username, setUsername] = useState("");

    const [items, setItems] = useState("");

    useEffect(() => {
        const name= localStorage.getItem('username');
        setUsername(name);
        console.log("username: ", username);
        console.log("items: ", name);
    
    }, []);

    return (
    <div>
        <Sidebar />
        <div className="rightSide">
        <h1>CGPA GRAPH</h1>
        <h1>Routine</h1>
        {username}
        </div>
    </div>
  )
}

export default DashBoard