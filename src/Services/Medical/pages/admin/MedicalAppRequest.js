import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import SidebarMedicalAdmin from '../../../../components/layout/SidebarMedicalAdmin';

export default function MedicalAppRequest() {
    
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
           
            <div class="jumbotron">
                <h1 class="display-4" align="center">Appoointment Request List</h1>
                
                <hr class="my-4" />
                <p align="center">Edit Appointment Status</p>
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
                    <td><input type="checkbox" defaultChecked={false} />        <input type="checkbox" defaultChecked={false} /></td>
                   </tr>
                   <tr>
                    <td>1705031</td>
                    <td>Dr. Sani</td>
                    <td>17.08.2022</td>
                    <td><input type="checkbox" defaultChecked={false} />        <input type="checkbox" defaultChecked={false} /></td>
                   </tr>
                   <tr>
                    <td>1705041</td>
                    <td>Dr. Molla</td>
                    <td>07.08.2022</td>
                    <td><input type="checkbox" defaultChecked={false} />        <input type="checkbox" defaultChecked={false} /></td>
                   </tr>
                </tbody>
                </table>
                <a class="btn btn-primary btn-lg" align="center" href="http://localhost:3000/medical_admin_home" role="button">Update</a>
        </div>
    )
}
