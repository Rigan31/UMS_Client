import React, { useEffect,  useState } from 'react'
import '../assets/css/ScholarshipList.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const ScholarshipList = () => {

    const url = "http://localhost:5023/scholarship/scholarship_list"; 
    

    const [backendData, setBackendData] = useState([]);
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        const getData = async () =>{
          const scholarship_list = await fetchList(url)
          
          setBackendData(scholarship_list)
        }
    
        getData();
    }, [])
    
    const fetchList = async (url) =>{
      const res = await fetch(url);
      const data = await res.json()
      return data.data;
    }






    const sortData = function(type){
        let d;
        if(type == "up") d = 1;
        else d = -1;

        let ff = function(a, b){
            if(a.creation_date > b.creation_date) return d;
            else if(a.creation_date < b.creation_date) return -d;
            else return 0;
        }

        const temp = [...backendData];
        temp.sort(ff);
        setBackendData(temp);
    }

    function handle(e){
        let newData = search
        newData = e.target.value;
        setSearch(newData);
    }

    const searchData = async () =>{
        console.log("Ekhane ashchhe!");
        console.log("Search: " , search);

        let url_p;
        if(search != "") url_p = url + "?level_term=" + search;
        else url_p = url;

        const ret = await fetchList(url_p);
        const temp = [...ret];
        setBackendData(temp);
    }
   


    return (
        <div>
        <Sidebar />
        <div className='rightSide'>
                <div className='pageTitle'>
                    Scholarship List
                </div>

                <div className='scholarshipDetails'>
                    <div className='scholarshipDetailsTitle'>
                        Scholarships
                        <br /> <br />

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Search level-term</Form.Label>
                                <Form.Control type="text" id="search" defaultValue={search} onChange={(e)=> handle(e)} />
                        </Form.Group> 
                        <span>&nbsp; &nbsp;</span>
                        <Button variant="primary" onClick={(e)=> searchData()}>
                            Search
                        </Button>

                        <br /><br />
                        <span>&nbsp; &nbsp;</span>
                        <Button variant="primary" onClick={(e)=> sortData("up")}>
                            Sort &uarr;
                        </Button>
                        <span>&nbsp; &nbsp;</span>
                        
                        <Button variant="primary" onClick={(e)=> sortData("down")}>
                            Sort &darr;
                        </Button>
                        <span>&nbsp; &nbsp;</span>

                        <Button variant="primary">
                            <a href={`../add_scholarship`} style={{color:'white'}}>Add</a>
                        </Button>
                    </div>
                    <div className='detailsForm'>
                    

                        { backendData.map(scholarship => {
                            return(
                                <Card className='singleScholarship'>
                                <Card.Body >
                                    <Card.Title>{scholarship.name}</Card.Title>
                                    <Card.Text>
                                        <p>Scholarship id: {scholarship.id}</p>
                                        <p>Scholarship amount: {scholarship.amount}</p>
                                        <p>Scholarship creation date: {scholarship.creation_date}</p>
                                        <p>Level_term: </p>
                                        {
                                            scholarship.level_term == null ?
                                            <p>All</p>
                                            :
                                            scholarship.level_term.map((a_data) => <p>{a_data}</p>)
                                        }
                                    </Card.Text>
                                    <Card.Link href={`single_scholarship?name=${scholarship.name}`}>
                                        Go to scholarship
                                    </Card.Link>
                                </Card.Body>
                                </Card>
                            )
                        })}       
                    </div>
                </div>


        </div>
        </div>
    )
}

export default ScholarshipList