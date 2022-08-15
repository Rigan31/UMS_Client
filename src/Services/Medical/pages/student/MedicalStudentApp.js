import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';
import TextField from '@material-ui/core/TextField';
import Sidebar from '../../../../components/layout/Sidebar';

export default function MedicalStudentApp() {
    
    return (    
        <div>
            <Sidebar/>
            <div class="jumbotron text-center" id="jumbotron">
                <h1 class="display-3">Book an Appointment</h1>
                <p class="lead">Schedule Description</p>
                <hr class="my-y-2"/>
                <p>Please give the following info</p>
                <form>
                <div class="form-group">
                <div style={{
                margin: 'auto',
                display: 'block',
                width: 'fit-content'
                }}>
                    <label>Choose Appointment Date</label><br/>
                <TextField
                    id="date"
                    
                    type="date"
                    defaultValue="2023-01-01"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />          
                </div>
                <br/>

                    <label for="specialization">Specialization : </label>
                    <select id="specialization" name="specialization" class="btn btn-secondary dropdown-toggle">
                        <option selected>Select Specialization</option>
                        <option>Orthopedics</option>
                        <option>Gastrology</option>
                        <option>Psychologist</option>
                    </select>
                    
                </div>
                <label for="doctor">Doctors : </label>
                    <select id="doctor" name="doctor" class="btn btn-secondary dropdown-toggle">
                        <option selected>Select Doctor</option>
                        <option>Md. Abul Kashem</option>
                        <option>Dr. Kabir</option>
                        <option>Dr. Saiful</option>
                    </select>
                
                    <br/> <br/>
                    <a type="button" class="btn btn-primary mb-2" href="http://localhost:3000/medical_student_home">Book</a>
                </form>
            </div>
        </div>
    )
}
