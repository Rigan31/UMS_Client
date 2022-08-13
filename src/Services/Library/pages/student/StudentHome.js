import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';

export default function StudentHome() {

    return (    
        <div>
            <div class="row">
            <div class="column">
                <div class="card"><Link to="/student_show_books">Show Books</Link></div>
            </div>
            <div class="column">
                <div class="card"><Link to="/student_show_borrow_info ">Show Borrow History</Link></div>
            </div>
            </div>
        </div>
    )
}
