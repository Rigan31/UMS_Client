import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';

export default function AddBook() {

    return (    
        <div>
            <div class="jumbotron text-center" id="jumbotron">
                <h1 class="display-3">Add Book</h1>
                <p class="lead">Book Description</p>
                <hr class="my-y-2"/>
                <p>Please give the following info</p>
                <form class="form-inline justify-content-center">

                    
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            

                            <input type="name" class="form-control" id="name" placeholder="Book Name"/><br/>
                            <input type="name" class="form-control" id="author" placeholder="Author"/><br/>
                            <input type="name" class="form-control" id="quantity" placeholder="Quantity"/><br/>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary mb-2">Add</button>
                </form>
            </div>
        </div>
    )
}
