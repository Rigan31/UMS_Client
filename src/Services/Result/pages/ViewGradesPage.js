import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import Sidebar from '../../../components/layout/Sidebar';

export default function ViewGradesPage() {
    
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
            <Sidebar />
            <div class="jumbotron">
                <h1 class="display-4" align="center">Result</h1>
                <p class="lead">Student's Name : <br/>
                                Student ID : <br/>
                                Total Credits : <br/>
                                CGPA : 
                
                </p>
                <hr class="my-4" />
                <p>     
                Level : <select name="level" class="btn btn-secondary dropdown-toggle">
                    <option selected>Select Level</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br/> <br/>
                Term : <select name="term" class="btn btn-secondary dropdown-toggle">
                    <option selected>Select Term</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                </p>
                <a class="btn btn-primary btn-lg" href="#" role="button">View Result</a>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Course No.</th>
                    <th scope="col">Course Title</th>
                    <th scope="col">Credit hours</th>
                    <th scope="col">Grades</th>
                    <th scope="col">Grade Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>

                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>GPA: </td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}
