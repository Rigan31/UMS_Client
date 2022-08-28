import React, { useEffect,  useState } from 'react'
import '../assets/css/CourseList.css'
import SideBarHead from '../../../components/layout/SideBarHead.js'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';


const AddCourse = () => {

    const deptName = "CSE";
    const url = "http://localhost:5002/head/showofferlist?deptName=" + deptName; 
    

    const [backendData, setBackendData] = useState([{

    }]);


    useEffect(() => {
        const getCourse = async () =>{
          const courseFromServer = await fetchCourse()
          setBackendData(courseFromServer)

          console.log("backend data: ", backendData)
        }
    
        getCourse();
    }, [])
    
    const fetchCourse = async () =>{
      const res = await fetch(url);
      const data = await res.json()
        
      return data.data;
    }


   


    return (
        <div>
        <SideBarHead />
        <div className='rightSide'>
                <div className='pageTitle'>
                    Offer CourseList
                </div>

                <div className='courseDetails'>
                    <div className='courseDetailsTitle'>
                        Department: CSE
                    </div>
                    <div className='detailsForm'>
                        { backendData.map((course) => (
                                <Card className='singleCourse'>
                                <Card.Body >
                                    <Card.Title>{course.course_title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{course.course_label}</Card.Subtitle>
                                    <Card.Text>
                                        <p>Credit hour: {course.credit}</p>
                                        <p>Level: {course.level}</p>
                                        <p>Term: {course.term}</p>
                                        <p>Type: {course.type}</p>
                                    </Card.Text>
                                    <Card.Link href={`/head/singleoffercourse/${course.offer_course_id}`}>Go to course</Card.Link>
                                </Card.Body>
                                </Card>
                        ))}
                        
                    


                    </div>
                </div>


        </div>
        </div>
    )
}

export default AddCourse