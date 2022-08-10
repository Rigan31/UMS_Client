import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import SidebarAdmin from '../../../components/layout/SidebarAdmin';


export default function AddStudentPage() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");

    let navigate = useNavigate(); 
    const routeChangeToAddStudent = () =>{  
     navigate('/add_student');
    }

    const add_student= () => {

        console.log("sending to server");
        console.log("password: ", password);
        Axios.post("http://localhost:5000/add_student", {
            id: id, 
            name: name,
            password: password,
            dept: dept
        }).then((response) => {
            console.log("response pelam", response);
            alert("Student Added!");
            routeChangeToAddStudent();

        });
    }

    return (    
        <div className='rightSide'>
                <SidebarAdmin />
                <div class="container rounded bg-white mt-5 mb-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Student ID</label>
                    <input class="form-control" id="exampleInputEmail1" placeholder="Student ID" required onChange={e => setId(e.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input class="form-control" id="exampleInputPassword1" placeholder="Name" required onChange={e => setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Department</label>
                    <input class="form-control" id="exampleInputPassword1" placeholder="Department" required onChange={e => setDept(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={add_student}>Submit</button>
            
            </div>
        </div>
    )
}
