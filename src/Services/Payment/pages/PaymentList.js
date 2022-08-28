import React, { useEffect,  useState } from 'react'
import '../assets/css/PaymentList.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import SidebarFinancialAdmin from '../../../components/layout/SidebarFinancialAdmin';


const PaymentList = () => {

    const query = new URLSearchParams(useLocation().search);
    let type = query.get("type");
    let std_id = query.get("student_id");

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

    useEffect(() => {
        const getPayments = async () =>{
          const payment_list = await fetchList()
          
          setBackendData(payment_list)
        }
    
        getPayments();
    }, [])
    
    const fetchList = async () =>{
      const res = await fetch(url);
      const data = await res.json()
      
      return data.data;
    }


    return (
        <div>
        <SidebarFinancialAdmin />
        <div className='containerTitle'>
            <div className='pageTitleNew'>
                {title}
            </div>
        </div>
        <div className='rightSideAddCourse'>                

                <div className='paymentDetailsNew'>
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
                                    {/* <Card.Link href={`singlepayment?student_id=${payment.student_id}&id=${payment.id}`}>
                                        Go to payment
                                    </Card.Link> */}
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

export default PaymentList