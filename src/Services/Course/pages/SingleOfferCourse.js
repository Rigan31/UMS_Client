import React, { useEffect,  useState } from 'react'
import '../assets/css/AddCourse.css'
import Sidebar from '../../../components/layout/Sidebar.js'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';


const SingleOfferCourse= () => {
    const { offerCourseId } = useParams();

    const url = "http://localhost:5002/head/singleoffercourse?offerCourseId=" + offerCourseId; 
    

    const [backendData, setBackendData] = useState([]);
    const [show, setShow] = useState(false);
    const [teacher, setTeacher] = useState("")
    const [teacherList, setTeacherList] = useState([{}])

    const handleClose = () => setShow(false);
    
    const handleSaveTeacher = () => {
        setShow(false);

        const url = "http://localhost:5002/head/singleoffercourse/saveteacher"

        Axios.post(url, {
            offerCourseId: offerCourseId,
            teacher: teacher,
        })
        .then(res=>{

        })


    }
    const handleShow = () => {
        setShow(true);
        const dept_name = 'CSE';
        const url = "http://localhost:5002/head/getTeacherList?dept_name=" + dept_name;
        Axios.get(url)
        .then(res=>{
            setTeacherList(res.data.data);
        })
    }


    useEffect(() => {
        const getCourse = async () =>{
          const courseFromServer = await fetchCourse()
          setBackendData(courseFromServer)
        }
    
        getCourse();
    }, [])
    
    const fetchCourse = async () =>{
      const res = await fetch(url);
      const data = await res.json()
    
      return data.data;
    }


    const [data, setData] = useState({
        deptName: "",
        courseName: "",
        courseID: "",
        creditHour: "",
        level: "",
        term: "",
        type: "",
    });

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            deptName: data.deptName,
            courseName: data.courseName,
            courseID: data.courseID,
            creditHour: data.creditHour,
            level: data.level,
            term: data.term,
            type: data.type
        })
        .then(res=>{
            if(res.data == "yes") {

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
        console.log(newData)
    }


   


    return (
        <div>
        <Sidebar />
        <div className='rightSide'>
                <div className='pageTitle'>
                    CourseList
                </div>

                <div className='courseDetails'>
                    <div className='courseDetailsTitle'>
                        Department: CSE
                    </div>
                    <div className='detailsForm'>

                    { backendData.map(course => {
                            return(
                    <Form onSubmit={(e)=> submit(e)}>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Department Name</Form.Label>
                                <Form.Select id="deptName" onChange={(e)=> handle(e)} defaultValue={course.dept_name} disabled>
                                    <option>Choose...</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ME">ME</option>
                                    <option value="EEE">EEE</option>
                                    <option value="ARCHI">ARCHI</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" id="courseName" defaultValue={course.course_title} onChange={(e)=> handle(e)} disabled/>
                            </Form.Group>

                            
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Course ID</Form.Label>
                            <Form.Control id="courseID" defaultValue={course.course_label}  onChange={(e)=> handle(e)} disabled/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Credit Hour</Form.Label>
                                <Form.Control type="text" id="creditHour" defaultValue={course.credit} onChange={(e)=> handle(e)} disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Level</Form.Label>
                                <Form.Control type="text" id="level" defaultValue={course.level}  onChange={(e)=> handle(e)} disabled/>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Term</Form.Label>
                                <Form.Control type="text" id="term" defaultValue={course.term}  onChange={(e)=> handle(e)} disabled/>
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type</Form.Label>
                            <Form.Select id="type" onChange={(e)=> handle(e)} defaultValue={course.type} disabled>
                                <option>Choose...</option>
                                <option>Theory</option>
                                <option>Sessional</option>
                            </Form.Select>
                            </Form.Group>

                        </Row>

                        </Form>

                            )
                    })}
                    </div>

                    <div className='AddType'>
                    
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Teacher:   </Form.Label>
                        <Form.Control type="text" id="teacher" defaultValue={teacher} disabled/>
                    </Form.Group>
                    
                    <Button variant="primary" onClick={handleShow}>
                            Add Teacher
                    </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Teacher Selection</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="formGroup" controlId="formGridState">
                                <Form.Select className='selectLogin' id="loginas" onChange={e => setTeacher(e.target.value)}>
                                    {teacherList.map((teacher)=>(
                                        <option value={teacher.username}>{teacher.username}</option>
                                    ))}    
                                    
                                
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSaveTeacher}>
                            Save 
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>


        </div>
        </div>
    )
}

export default SingleOfferCourse