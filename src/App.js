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

import MedicalAddDoctor from './Services/Medical/pages/admin/MedicalAddDoctor'
import MedicalAdminHome from './Services/Medical/pages/admin/MedicalAdminHome'
import MedicalAdminShowSchedule from './Services/Medical/pages/admin/MedicalAdminShowSchedule'
import MedicalAdminShowScheduleEdit from './Services/Medical/pages/admin/MedicalAdminShowScheduleEdit'
import MedicalAppRequest from './Services/Medical/pages/admin/MedicalAppRequest'
import MedicalStudentApp from './Services/Medical/pages/student/MedicalStudentApp'
import MedicalStudentAppHistory from './Services/Medical/pages/student/MedicalStudentAppHistory'
import MedicalStudentHome from './Services/Medical/pages/student/MedicalStudentHome'
import MedicalStudentShowSchedule from './Services/Medical/pages/student/MedicalStudentShowSchedule'

var logged_in = ""

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

                    <Route path="/library_admin_home" element={ <LibraryAdminHome/> } />
                    <Route path="/add_book" element={ <AddBook/> } />
                    <Route path="/grant_book" element={ <GrantBook/> } />
                    <Route path="/admin_show_books" element={ <AdminShowBooks/> } />
                    <Route path="/admin_show_books_edit" element={ <AdminShowBooksEdit/> } />
                    <Route path="/admin_show_borrow_info" element={ <AdminShowBorrowInfo/> } />
                    <Route path="/admin_show_borrow_info_edit" element={ <AdminShowBorrowInfoEdit/> } />
                    <Route path="/library_student_home" element={ <LibraryStudentHome/> } />
                    <Route path="/student_show_books" element={ <StudentShowBooks/> } />
                    <Route path="/student_show_borrow_info" element={ <StudentShowBorrowInfo/> } />

                    <Route path="/upload_feedback" element={ <UploadFeedback/> } />
                    <Route path="/show_feedbacks" element={ <ShowFeedbacks/> } />

                    <Route path="/medical_add_doctor" element={ <MedicalAddDoctor/> } />
                    <Route path="/medical_admin_home" element={ <MedicalAdminHome/> } />
                    <Route path="/medical_admin_show_schedule" element={ <MedicalAdminShowSchedule/> } />
                    <Route path="/medical_admin_show_schedule_edit" element={ <MedicalAdminShowScheduleEdit/> } />
                    <Route path="/medical_app_request" element={ <MedicalAppRequest/> } />
                    <Route path="/medical_student_app" element={ <MedicalStudentApp/> } />
                    <Route path="/medical_student_app_history" element={ <MedicalStudentAppHistory/> } />
                    <Route path="/medical_student_home" element={ <MedicalStudentHome/> } />
                    <Route path="/medical_student_show_schedule" element={ <MedicalStudentShowSchedule/> } />
                </Routes>
                
            
        </BrowserRouter>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}

export {
    logged_in
}