import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';

export default function AdminHome() {

    return (    
        <div>
            <div class="row">
            <div class="column">
                <div class="card"><Link to="/add_book">Add Book</Link></div>
            </div>
            <div class="column">
                <div class="card"><Link to="/grant_book">Grant Book</Link></div>
            </div>
            <div class="column">
                <div class="card"><Link to="/admin_show_books">Show Books</Link></div>
            </div>
            <div class="column">
                <div class="card"><Link to="/admin_show_borrow_info">Show Borrow Info</Link></div>
            </div>
            </div>
        </div>
    )
}
