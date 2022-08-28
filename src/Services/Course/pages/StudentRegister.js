import Sidebar from '../../../components/layout/Sidebar.js'
import '../../Course/assets/css/StudentRegister.css'
import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function StudentRegister() {
  
  const [backendData, setBackendData] = useState([])
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([])


    let navigate = useNavigate(); 
    const routeChangeToProfile = () =>{ 
      navigate('/course');
    }
  
  useEffect(() => {
    const getCourse = async () =>{
      const courseFromServer = await fetchCourse()
      setBackendData(courseFromServer)
    }

    getCourse();
}, [])

const fetchCourse = async () =>{
  const res = await fetch("http://localhost:5002/offeredcourse");
  const data = await res.json()


  for(var i = 0; i < data.length; i++){
    data[i]["selected"] = false;
  }
  console.log("pls hoye ja", data);

  return data.data;
}

  // Select/ UnSelect Table rows
  
  const onMasterCheck = (e) => {
    let tempList = backendData;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));
  
    //Update State
    setMasterChecked(e.target.checked);
    setBackendData(tempList);
    setSelectedList(backendData.filter((e) => e.selected));
  }


  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e, item) => {
    let tempList = backendData;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = backendData.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setMasterChecked(totalItems === totalCheckedItems);
    setBackendData(tempList);
    setSelectedList(backendData.filter((e) => e.selected));
    // Update State
    // this.setState({
    //   MasterChecked: totalItems === totalCheckedItems,
    //   List: tempList,
    //   SelectedList: this.state.List.filter((e) => e.selected),
    // });
  }

  // Event to get selected rows(Optional)
  const getSelectedRows = () => {
    setSelectedList(backendData.filter((e) => e.selected));
    

    let student_id = "1705041"

    console.log("sending to server");
    let offered_course_id = [];
    let pref_num = [];
    for(var i = 0; i < SelectedList.length; i++){
      offered_course_id.push(SelectedList[i].id);
      pref_num.push(1);
    }

    console.log("blah blah")
    console.log(offered_course_id);
    console.log(pref_num);

    Axios.post("http://localhost:5002/", {
      "offered_course_id": offered_course_id,
      "pref_num" : pref_num,
      "student_id": student_id
    }).then((response) => {
        console.log(response);
        //console.log(response.data.result);
        routeChangeToProfile();
        

    });


  }
  
    return (
    <div>
      <Sidebar />
      <div className='rightSide'>
        <div className='pageHeader'>
          <div className='pageName'>
            Course Registration
          </div>

          <div className='userName'>
            <h5>Name</h5>
            <h3>Asif mustafa hasan</h3>
          </div>

          <div className='userRoll'>
            <h5>Student ID</h5>
            <h3>1705041</h3>
          </div>
        </div>

        <div className='pageTable'>
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={MasterChecked}
                      id="mastercheck"
                      onChange={(e) => onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">Course No</th>
                  <th scope="col">Course Title</th>
                  <th scope="col">Credit hour</th>
                </tr>
              </thead>
              <tbody>
              {(typeof backendData === 'undefined') ? (
                  <p></p>
              ) : (
                backendData.map((course, i) => (
                  <tr key={i} className={course.selected ? "selected" : ""}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={course.selected}
                      className="form-check-input"
                      id="rowcheck{i}"
                      onChange={(e) => onItemCheck(e, course)}
                    />
                  </th>
                  <td>{course.course_label}</td>
                  <td>{course.course_title}</td>
                  <td>{course.credit}</td>
                </tr>
                 )
                )

              )
            }
              </tbody>
            </table>
            <button
              className="btn btn-primary"
              onClick={() => getSelectedRows()}
            >
              Submit 
            </button>
            {/* <div className="row">
              <b>All Row Items:</b>
              <code>{JSON.stringify(this.state.List)}</code>
          </div> */}
            {/* <div className="row">
              <b>Selected Row Items(Click Button To Get):</b>
              <code>{JSON.stringify(SelectedList)}</code>
            </div> */}
          </div>
        </div>
      </div>
        </div>


      </div>
    </div>
  )
  }
