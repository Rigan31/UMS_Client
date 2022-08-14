import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import Sidebar from '../../../../components/layout/Sidebar';

export default function MedicalStudentAppHistory() {
    
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
           <Sidebar/>
            <div class="jumbotron">
                <h1 class="display-4" align="center">Appointment History</h1>
                
                <hr class="my-4" />
                <p align="center">Here are your past Appointment Statuses</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Date</th>
                    <th scope="col">Approve/Decline</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>1705034</td>
                    <td>Dr. Abul Kashem</td>
                    <td>17.08.2022</td>
                    <td><input type="checkbox" checked={true} />        <input type="checkbox" checked={false} /></td>
                   </tr>
                   <tr>
                    <td>1705034</td>
                    <td>Dr. Sani</td>
                    <td>17.08.2022</td>
                    <td><input type="checkbox" checked={false} />        <input type="checkbox" checked={true} /></td>
                   </tr>
                   <tr>
                    <td>1705034</td>
                    <td>Dr. Molla</td>
                    <td>07.08.2022</td>
                    <td><input type="checkbox" checked={true} />        <input type="checkbox" checked={false} /></td>
                   </tr>
                </tbody>
                </table>
    
        </div>
    )
}
