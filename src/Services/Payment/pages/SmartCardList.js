import React, { useEffect,  useState } from 'react'
import '../assets/css/SmartCardList.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import SidebarFinancialAdmin from '../../../components/layout/SidebarFinancialAdmin';


const SmartCardList = () => {

    const tableName = "smart_card";
    const url = "http://localhost:5022/payment/get_list?table=" + tableName; 
    

    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const getSmartCards = async () =>{
          const smart_card_list = await fetchList()
          
          setBackendData(smart_card_list)
        }
    
        getSmartCards();
    }, [])
    
    const fetchList = async () =>{
      const res = await fetch(url);
      const data = await res.json()
      
      return data.data;
    }


   


    return (
        <div>
        <SidebarFinancialAdmin />
        <div className='rightSide'>
                <div className='pageTitle'>
                    Smart Card List
                </div>

                <div className='cardDetails'>
                    <div className='cardDetailsTitle'>
                        {tableName}
                    </div>
                    <div className='detailsForm'>
                    

                        { backendData.map(card => {
                            return(
                                <Card className='singleCard'>
                                <Card.Body >
                                    <Card.Title>{card.student_id}</Card.Title>
                                    <Card.Text>
                                        <p>Card no: {card.card_no}</p>
                                        <p>Balance: {card.balance}</p>
                                        <p>Expiry date: {card.expiry}</p>
                                        <p>Issue date: {card.issue}</p>
                                        <p>Pin: {card.pin}</p>
                                    </Card.Text>
                                    <Card.Link href={`singlecard?student_id=${card.student_id}&card_no=${card.card_no}`}>
                                        Go to card
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

export default SmartCardList