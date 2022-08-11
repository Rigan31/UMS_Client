import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

export default function AdminShowBooks() {
    
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
            <div class="jumbotron">
                <h1 class="display-4" align="center">Books List</h1>
                
                <hr class="my-4" />
                <a class="btn btn-primary btn-lg" href="#" role="button">Edit</a>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Book Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Default</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>

                    <tr class="table-primary">
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-success">
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-danger">
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-warning">
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-info">
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                    <tr class="table-light">
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}
