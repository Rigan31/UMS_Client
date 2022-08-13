import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/AdminHome.css';

export default function AddBook() {
    const [book_name, setBookName] = useState([]);
    const [author_name, setAuthorName] = useState([]);
    const [quantity, setQuantity] = useState([]);

    let navigate = useNavigate(); 
    const routeChangeToAddBook= () =>{ 
        navigate('/add_book');
    }
    const save_book = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5009/save_book", {
            book_name: book_name,
            author_name: author_name,
            quantity: quantity,
        }).then((response) => {
            console.log(response)
            alert("Book Added!");
            routeChangeToAddBook();
        });
    }

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
                            <input type="name" class="form-control" id="name" placeholder="Book Name" onChange={e => setBookName(e.target.value)}/><br/>
                            <input type="name" class="form-control" id="author" placeholder="Author"onChange={e => setAuthorName(e.target.value)}/><br/>
                            <input type="name" class="form-control" id="quantity" placeholder="Quantity"onChange={e => setQuantity(e.target.value)}/><br/>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary mb-2" onClick={ e => save_book(e) }>Add</button>
                </form>
            </div>
        </div>
    )
}
