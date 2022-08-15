import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import SidebarMedicalAdmin from '../../../../components/layout/SidebarMedicalAdmin';

export default function MedicalAdminShowSchedule() {
    
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
           
            <div class="jumbotron">
                <h1 class="display-4" align="center">Schedule of Doctors</h1>
                
                <hr class="my-4" />
                <p align="center">List according to time period</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Sat</th>
                    <th scope="col">Sun</th>
                    <th scope="col">Mon</th>
                    <th scope="col">Tue</th>
                    <th scope="col">Wed</th>
                    <th scope="col">Thu</th>
                    <th scope="col">Fri</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Dr. Abul Kashem</td>
                    <td>9am-1pm</td>
                    <td>9am-1pm</td>
                    <td> - </td>
                    <td>9am-1pm</td>
                    <td>9am-1pm</td>
                    <td>Holiday</td>
                    <td>Holiday</td>
                   </tr>
                   <tr>
                    <td>Dr. Makbul</td>
                    <td>9am-1pm</td>
                    <td>9am-1pm</td>
                    <td> - </td>
                    <td> - </td>
                    <td>9am-1pm</td>
                    <td>Holiday</td>
                    <td>Holiday</td>
                   </tr>
                   <tr>
                    <td>Dr. Ali</td>
                    <td>9am-1pm</td>
                    <td>9am-1pm</td>
                    <td> - </td>
                    <td>9am-1pm</td>
                    <td> - </td>
                    <td>Holiday</td>
                    <td>Holiday</td>
                   </tr>                   
                </tbody>
                </table>
                <a class="btn btn-primary btn-lg" align="center" href="http://localhost:3000/medical_admin_show_schedule_edit" role="button">Edit</a>
        </div>
    )
}
