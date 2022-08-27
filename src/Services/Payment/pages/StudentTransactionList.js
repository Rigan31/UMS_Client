import React, { useEffect,  useState } from 'react'
import '../assets/css/TransactionList.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import SidebarFinancialAdmin from '../../../components/layout/SidebarFinancialAdmin';


const StudentTransactionList = () => {

    const query = new URLSearchParams(useLocation().search);
    let type = query.get("type");
    let std_id = query.get("student_id");

    if(type == null) type = "all";

    let url, title;
    if(type == "all"){
        url = "http://localhost:5022/payment/get_list?table=" + "transactions";
        title = "Transaction List"; 
    }
    else{
        url = "http://localhost:5022/payment/transaction?student_id=" + std_id;
        title = "Transaction History of " + std_id;
    }
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const getData = async () =>{
          const data = await fetchList()
          
          setBackendData(data)
        }
    
        getData();
    }, [])
    
    const fetchList = async () =>{
      const res = await fetch(url);
      const data = await res.json()
      
      return data.data;
    }


    return (
        <div>
        <Sidebar />
        <div className='containerTitle'>
            <div className='pageTitleNew'>
                Transaction List
            </div>
        </div>
        <div className='rightSideAddCourse'>

                <div className='transactionDetailsNew'>
                    <div className='detailsForm'>
                        { backendData.map(transaction => {
                            return(
                                <Card className='singleCourseNew'>
                                <Card.Body className='cardBodyChange'>
                                    <Card.Title>{transaction.student_id}</Card.Title>
                                    <Card.Text>
                                        <p>Id: {transaction.id}</p>
                                        <p>Amount: {transaction.amount}</p>
                                        <p>Card no: {transaction.card_no}</p>
                                        <p>Date: {transaction.date}</p>
                                        <p>Type: {transaction.type}</p>
                                        <p>Type id: {transaction.type_id}</p>
                                        <p>Trx id: {transaction.trx_id}</p>
                                    </Card.Text>
                                    <Card.Link href={`singletransaction?student_id=${transaction.student_id}&id=${transaction.id}`}>
                                        Go to Transaction
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

export default StudentTransactionList