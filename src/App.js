import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './Services/Login/pages/LoginPage'
import RegPage from './components/pages/RegPage'
import ProfilePage from './components/pages/ProfilePage'

// import './App.css'
import AddCourse from './Services/Course/pages/AddCourse'
import CourseList from './Services/Course/pages/CourseList'
import SingleCourse from './Services/Course/pages/SingleCourse'
import StudentRegister from './Services/Course/pages/StudentRegister'
import ViewGradesPage from './Services/Result/pages/ViewGradesPage'
import UploadResultPage from './Services/Result/pages/ShowResultPage'
import ShowResultPage from './Services/Result/pages/ShowResultPage'
import AdminProfilePage from './Services/Profile/pages/AdminProfilePage'
import AddStudentPage from './Services/Profile/pages/AddStudentPage'
import OfferCourse from './Services/Course/pages/OfferCourse'
import ShowOfferList from './Services/Course/pages/ShowOfferList'
import SingleOfferCourse from './Services/Course/pages/SingleOfferCourse'




//  AMAR CODE
import SmartCardList from './Services/Payment/pages/SmartCardList'
import SingleCard from './Services/Payment/pages/SingleCard'
import AddCard from './Services/Payment/pages/AddCard'
import PaymentList from './Services/Payment/pages/PaymentList'
import SinglePayment from './Services/Payment/pages/SinglePayment'
import AddPayment from './Services/Payment/pages/AddPayment'
import TransactionList from './Services/Payment/pages/TransactionList'
import SingleTransaction from './Services/Payment/pages/SingleTransaction'
import AddTransaction from './Services/Payment/pages/AddTransaction'




export default function App() {
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <LoginPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/courselist" element={<CourseList />} />
                    <Route path="/logout" element={ <LoginPage/> } />
                    <Route path="/reg" element={ <RegPage/> } />
                    <Route path="/singlecourse/:courseId" element={ <SingleCourse/> } />
                    <Route path="/profile" element={ <ProfilePage/> } />
                    
                    <Route path="/view_grades" element={ <ViewGradesPage/> } />
                    <Route path="/admin_profile" element={ <AdminProfilePage/> } />
                    <Route path="/add_student" element={ <AddStudentPage/> } />
                    <Route path="/upload_result" element={ <UploadResultPage/> } />
                    <Route path="/show_result" element={ <ShowResultPage/> } />
                    <Route path="/student_register" element={ <StudentRegister/> } />
                    <Route path="/head/offercourse" element={ <OfferCourse /> } />
                    <Route path="/head/showofferlist" element={<ShowOfferList /> } />
                    <Route path="/head/singleoffercourse/:offerCourseId" element={ <SingleOfferCourse/> } />



                    {/* AMAR CODE */}
                    <Route path="/smart_card_list" element={ <SmartCardList /> } />
                    <Route path="/singlecard" element={ <SingleCard/> } />
                    <Route path="/addcard" element={ <AddCard/> } />
                    
                    {/* //  payment_list?type=all / single & student_id=1 */}
                    <Route path="/payment_list" element={ <PaymentList /> } /> 
                    <Route path="/singlepayment" element={ <SinglePayment/> } />
                    <Route path="/addpayment" element={ <AddPayment/> } /> 
                    
                    {/* //  transaction_list?type=all / single & student_id=1 */}
                    <Route path="/transaction_list" element={ <TransactionList /> } /> 
                    <Route path="/singletransaction" element={ <SingleTransaction/> } />
                    <Route path="/addtransaction" element={ <AddTransaction/> } />  
                       

                </Routes>
                
            
        </BrowserRouter>
    )
}