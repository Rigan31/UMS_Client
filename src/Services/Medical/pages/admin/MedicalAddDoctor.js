import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';
import SidebarMedicalAdmin from '../../../../components/layout/SidebarMedicalAdmin';


export default function MedicalAddDoctor() {
    const [doctor_id, setDoctorId] = useState([]);
    const [doctor_name, setDoctorName] = useState([]);
    const [specialization, setSpecialization] = useState([]);

    let navigate = useNavigate(); 
    const routeChangeToAddDoctor= () =>{ 
        navigate('/medical_add_doctor');
    }
    const save_doctor = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5011/save_doctor", {
            doctor_id: doctor_id,
            doctor_name: doctor_name,
            specialization: specialization
        }).then((response) => {
            console.log(response)
            alert("Book Added!");
            routeChangeToAddDoctor();
        });
    }

    return (    
        <div className="def">
            
            <div class="jumbotron text-center box" id="jumbotron">
                <h1 class="display-3">Add Doctor</h1>
                <p class="lead">Doctor Description</p>
                <hr class="my-y-2"/>
                <p>Please give the following info</p>
                <form class="justify-content-center">
                    <label>Doctor ID: </label>
                    <input type="id" class="form-control" id="id" placeholder="Doctor ID" onChange={e => setDoctorId(e.target.value)}/><br/>
                    <label>Doctor Name: </label>
                    <input type="name" class="form-control" id="author" placeholder="Doctor Name" onChange={e => setDoctorName(e.target.value)}/><br/>
                    <label>Specialization: </label>
                    <input type="specialization" class="form-control" id="specialization" placeholder="Specialization" onChange={e => setSpecialization(e.target.value)}/><br/>
                     
                    <a type="button" class="btn btn-primary mb-2" href="http://localhost:3000/medical_admin_home">Add</a>
                </form>
            </div>
        </div>
    )
}
