import React, { useEffect,  useState } from 'react'
import '../assets/css/PaymentList.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SidebarFinancialAdmin from '../../../components/layout/SidebarFinancialAdmin';


const StudentPaymentList = () => {

    const query = new URLSearchParams(useLocation().search);
    let type = "single";
    let std_id = localStorage.getItem("username");

    if(type == null) type = "all";

    let url, title;
    if(type == "all"){
        url = "http://localhost:5022/payment/get_list?table=" + "due_payment";
        title = "Payment List"; 
    }
    else{
        url = "http://localhost:5022/payment/due_payment?student_id=" + std_id;
        title = "Payment History of " + std_id;
    }
    const [backendData, setBackendData] = useState([]);
    const [initial, setInitial] = useState([]);
    const [search, setSearch] = useState("...");

    const options = [ '...', 'course', 'library', 'medical', 'scholarship' ];



    useEffect(() => {
        const getPayments = async () =>{
          const payment_list = await fetchList()
          
          setBackendData(payment_list)

          const temp = []
          for(var i=0; i<payment_list.length; i++)
            temp.push(Object.assign({}, payment_list[i]));
          setInitial(...[temp]);
        }
    
        getPayments();
    }, [])
    
    const fetchList = async () =>{
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
        
        let temp = [];

        if(search == "..."){
          for(var i=0; i<initial.length; i++) temp.push(Object.assign({}, initial[i]));
        }
        else{

            for(var i=0; i<initial.length; i++){
                if(initial[i].type != search) continue;
                temp.push(Object.assign({}, initial[i]));
            }

        }
        
        setBackendData(...[temp]);
    }




    return (
        <div>
        <Sidebar />
        <div className='containerTitle'>
            <div className='pageTitleNew'>
                {title}
            </div>
        </div>
        <div className='rightSideAddCourse'>     
                <div className='paymentDetailsNew'>

                    <div className='scholarshipDetailsTitle'>
                        <Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label><h5>Select Type</h5></Form.Label>
                                    <Form.Control as="select" id="search" defaultValue={search} onChange={(e)=> handle(e)}>
                                    {
                                        options.map((option) => {
                                            return(
                                                <option value={option}>{option}</option>
                                            )
                                        })
                                    }
                                    </Form.Control>
                            </Form.Group> 
                        </Row>
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
                    </div>
                    
                    <div className='detailsForm'>
                        { backendData.map(payment => {
                            return(
                                <Card className='singleCourseNew' style={{marginBottom:'20px'}}>
                                <Card.Body className='cardBodyChange'>
                                    <Card.Title>{payment.student_id}</Card.Title>
                                    <Card.Text>
                                        <p>Amount: {payment.amount}</p>
                                        <p>Fine: {payment.fine}</p>
                                        <p>Creation date: {payment.creation_date}</p>
                                        <p>Due date: {payment.due_date}</p>
                                        <p>Type: {payment.type}</p>
                                        <p>Is paid: {payment.ispaid == true? "True" : "False"}</p>
                                    </Card.Text>
                                    <Card.Link href={`singlepayment?student_id=${payment.student_id}&id=${payment.id}`}>
                                        Go to payment
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

export default StudentPaymentList;