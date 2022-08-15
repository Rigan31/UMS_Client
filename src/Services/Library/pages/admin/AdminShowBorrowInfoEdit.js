import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import SidebarLibraryAdmin from '../../../../components/layout/SidebarLibraryAdmin';

export default function AdminShowBorrowInfo() {
    const [backendData, setBackendData] = useState("")
    const [is_returned, setIsReturned] = useState("")
    const [id, setId] = useState("")
    useEffect(() => {
        fetch("http://localhost:5009/get_borrowed_books").then(
        response => response.json()
        ).then(
        data => {
            setBackendData(data)
        }
        )
    }, [])
    
    let navigate = useNavigate(); 
        const routeChangeToAdminShowBorrowInfo= () =>{ 
            alert("Borrow History Updated!");
            navigate('/admin_show_borrow_info');
        }

    const update_borrow_info= (e) => {
        e.preventDefault();
        console.log('id : ', id);
        console.log('is returned? : ', is_returned)
        Axios.post("http://localhost:5009/update_borrow_info", {
            id: id,
            is_returned: is_returned
        }).then((response) => {
            console.log(response)
        });
    }
    return (    
        <div className="container rounded bg-white mt-5 mb-5">
           
            <div class="jumbotron">
                <h1 class="display-4" align="center">Books Borrow List</h1>
                
                <hr class="my-4" />
                <p align="center">Edit Book Borrow History</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Is Returned?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    (typeof backendData.results === 'undefined') ? (
                        <p>loading...</p>
                    ) : (
                    backendData.results.map((result, i) => (  
                        
                        <tr>
                        <td>{result.student_id}</td>
                        <td>{result.book_name}</td>
                        <td>{result.due_date}</td>
                        <td><input type="checkbox" defaultChecked={result.is_returned} onChange={ e => {setIsReturned(e.target.value); setId(result.id); update_borrow_info(e) }}/></td>
                        </tr>
                        
                    )
                    )
                    )
                }  
                </tbody>
                </table>
                <a class="btn btn-primary btn-lg" align="center" href="#" role="button" onClick={ routeChangeToAdminShowBorrowInfo }>Update</a>
        </div>
    )
}
