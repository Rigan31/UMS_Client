import React, { useState } from 'react'
import '../assets/css/AddTransaction.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddTransaction = () => {

    // student_id=${payment.student_id}
    //                                                 &amount=${payment.amount}
    //                                                 &type=${payment.type}
    //                                                 &type_id=${payment.id}
    //                                                 `} 

    const url = "http://localhost:5022/payment/create_transaction"
    let navigate = useNavigate(); 
    const query = new URLSearchParams(useLocation().search);

    const routeChangeToProfile = (student_id, id) =>{ 
        const url = `../singleTransaction?student_id=${student_id}&id=${id}`;
        navigate(url);
    }

    const [data, setData] = useState({
        student_id: query.get("student_id"),
        card_no: "card",
        amount: query.get("amount"),
        type: query.get("type"),
        trx_id: "trx",
        type_id: query.get("type_id")
    });

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            student_id: data.student_id,
            card_no: data.card_no,
            amount: data.amount,
            type: data.type,
            trx_id: data.trx_id,
            type_id: data.type_id
        })
        .then(res=>{

            console.log("Ekhane");
            console.log(data);
            console.log(res);
            if(res.data.status == "success") {
                routeChangeToProfile(data.student_id, res.data.data.id);
            }
            else{
                alert('Data is invaild');
            }
        })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }


    return (
        <div>
        <Sidebar />
        <div className='rightSide'>
                <div className='pageTitle'>
                    Add New Transaction
                </div>

                <div className='paymentDetails'>
                    <div className='transactionDetailsTitle'>
                        Transaction Details
                    </div>
                    <div className='detailsForm'>
                        <Form onSubmit={(e)=> submit(e)}>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Student Id</Form.Label>
                                <Form.Control type="text" id="student_id" defaultValue={data.student_id} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Card No</Form.Label>
                                <Form.Control type="text" id="card_no" defaultValue={data.card_no} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" id="amount" defaultValue={data.amount} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" id="type" defaultValue={data.type} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Trx Id</Form.Label>
                                <Form.Control type="text" id="trx_id" defaultValue={data.trx_id} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Type Id</Form.Label>
                                <Form.Control type="text" id="type_id" defaultValue={data.type_id} onChange={(e)=> handle(e)}/>
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                            </Form>
                    
                    
                    
                    </div>
                </div>


        </div>
        </div>
    )
}

export default AddTransaction