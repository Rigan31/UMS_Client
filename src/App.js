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
import UploadResultPage from './Services/Result/pages/UploadResultPage'
import ShowResultPage from './Services/Result/pages/ShowResultPage'
import AdminProfilePage from './Services/Profile/pages/AdminProfilePage'
import AddStudentPage from './Services/Profile/pages/AddStudentPage'
import OfferCourse from './Services/Course/pages/OfferCourse'
import ShowOfferList from './Services/Course/pages/ShowOfferList'
import SingleOfferCourse from './Services/Course/pages/SingleOfferCourse'
import AddOutline from './Services/Course/pages/AddOutline'

import LibraryAdminHome from './Services/Library/pages/admin/AdminHome'
import AddBook from './Services/Library/pages/admin/AddBook'
import GrantBook from './Services/Library/pages/admin/GrantBook'
import AdminShowBooks from './Services/Library/pages/admin/AdminShowBooks'
import AdminShowBooksEdit from './Services/Library/pages/admin/AdminShowBooksEdit'
import AdminShowBorrowInfo from './Services/Library/pages/admin/AdminShowBorrowInfo'
import AdminShowBorrowInfoEdit from './Services/Library/pages/admin/AdminShowBorrowInfoEdit'
import LibraryStudentHome from './Services/Library/pages/student/StudentHome'
import StudentShowBooks from './Services/Library/pages/student/StudentShowBooks'
import StudentShowBorrowInfo from './Services/Library/pages/student/StudentShowBorrowInfo'
import UploadFeedback from './Services/Feedback/pages/student/UploadFeedback'
import ShowFeedbacks from './Services/Feedback/pages/admin/ShowFeedbacks'


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

// piyal code
import MedicalAddDoctor from './Services/Medical/pages/admin/MedicalAddDoctor'
import MedicalAdminHome from './Services/Medical/pages/admin/MedicalAdminHome'
import MedicalAdminShowSchedule from './Services/Medical/pages/admin/MedicalAdminShowSchedule'
import MedicalAdminShowScheduleEdit from './Services/Medical/pages/admin/MedicalAdminShowScheduleEdit'
import MedicalAppRequest from './Services/Medical/pages/admin/MedicalAppRequest'
import MedicalStudentApp from './Services/Medical/pages/student/MedicalStudentApp'
import MedicalStudentAppHistory from './Services/Medical/pages/student/MedicalStudentAppHistory'
import MedicalStudentHome from './Services/Medical/pages/student/MedicalStudentHome'
import MedicalStudentShowSchedule from './Services/Medical/pages/student/MedicalStudentShowSchedule'

import DashBoard from './Services/Profile/pages/DashBoard'
import CourseRegAdvisor from './Services/Course/pages/CourseRegAdvisor'
import SeeStudentProfile from './Services/Profile/pages/SeeStudentProfile'




export default function App() {


    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <LoginPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    
                    <Route path="/logout" element={ <LoginPage/> } />
                    <Route path="/reg" element={ <RegPage/> } />
                    
                    <Route path="/profile" element={ <ProfilePage/> } />
                    
                    <Route path="/view_grades" element={ <ViewGradesPage/> } />
                    <Route path="/admin_profile" element={ <AdminProfilePage/> } />
                    
                    
                    <Route path="/show_result" element={ <ShowResultPage/> } />
                    <Route path="/student_register" element={ <StudentRegister/> } />
                    
                    
                    
                    
                    
                    
                    

                    

                    <Route path="/library_student_home" element={ <LibraryStudentHome/> } />
                    <Route path="/student_show_books" element={ <StudentShowBooks/> } />
                    <Route path="/student_show_borrow_info" element={ <StudentShowBorrowInfo/> } />

                    <Route path="/upload_feedback" element={ <UploadFeedback/> } />
                    


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
                    


                    {/* piyal code  */}
                    


                    <Route path="/dashboard" element={ <DashBoard/> } />




                    {/* Teacher part */}
                    <Route path="/teacher/upload_result" element={ <UploadResultPage/> } />
                    <Route path="/teacher/addoutline" element={ <AddOutline/> } />

                    {/* Head part */}

                    <Route path="/head/offercourse" element={ <OfferCourse /> } />
                    <Route path="/head/showofferlist" element={<ShowOfferList /> } />
                    <Route path="/head/singleoffercourse/:offerCourseId" element={ <SingleOfferCourse/> } />
                    <Route path="/head/show_feedbacks" element={ <ShowFeedbacks/> } />
                    <Route path="/head/addcourse" element={<AddCourse />} />
                    <Route path="/head/courselist" element={<CourseList />} />
                    <Route path="/singlecourse/:courseId" element={ <SingleCourse/> } />



                    {/* Advisor part */}
                    <Route path="/advisor/course_registration" element={ <CourseRegAdvisor/> } />
                    <Route path="/advisor/see_student_profile" element={ <SeeStudentProfile/> } />

                    {/* Admin part */}
                    <Route path="/admin/add_student" element={ <AddStudentPage/> } />

                    {/* Librarian */}
                    
                    <Route path="/library_admin_home" element={ <LibraryAdminHome/> } />
                    <Route path="/add_book" element={ <AddBook/> } />
                    <Route path="/grant_book" element={ <GrantBook/> } />
                    <Route path="/admin_show_books" element={ <AdminShowBooks/> } />
                    <Route path="/admin_show_books_edit" element={ <AdminShowBooksEdit/> } />
                    <Route path="/admin_show_borrow_info" element={ <AdminShowBorrowInfo/> } />
                    <Route path="/admin_show_borrow_info_edit" element={ <AdminShowBorrowInfoEdit/> } />


                    {/* Medical staff */}
                    <Route path="/medical_add_doctor" element={ <MedicalAddDoctor/> } />
                    <Route path="/medical_admin_home" element={ <MedicalAdminHome/> } />
                    <Route path="/medical_admin_show_schedule" element={ <MedicalAdminShowSchedule/> } />
                    <Route path="/medical_admin_show_schedule_edit" element={ <MedicalAdminShowScheduleEdit/> } />
                    <Route path="/medical_app_request" element={ <MedicalAppRequest/> } />
                    <Route path="/medical_student_app" element={ <MedicalStudentApp/> } />
                    <Route path="/medical_student_app_history" element={ <MedicalStudentAppHistory/> } />
                    <Route path="/medical_student_home" element={ <MedicalStudentHome/> } />
                    <Route path="/medical_student_show_schedule" element={ <MedicalStudentShowSchedule/> } />


                    {/* Financial admin */}
                    
                </Routes>
                
            
        </BrowserRouter>
    )
}