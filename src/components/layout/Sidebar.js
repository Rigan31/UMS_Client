import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../../assets/css/SideBar.css'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {CgHomeAlt} from "react-icons/cg";
import {CgProfile} from "react-icons/cg";
import {MdAppRegistration} from "react-icons/md";
import {CgList} from "react-icons/cg";
import {CgLogOut} from "react-icons/cg";
import {GrMoney} from "react-icons/gr";
import {TbSchool} from "react-icons/tb";
import {MdOutlineFeedback} from "react-icons/md";
import {MdOutlineMedicalServices} from "react-icons/md";
import {IoLibraryOutline} from "react-icons/io5";


const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [loggedInName, setLoggedInName] = useState("");


    useEffect(() => {
        const name= localStorage.getItem('username');
        setLoggedInName(name);
        //console.log("username: ", username);
        //console.log("items: ", name);
    
    }, []);

  return (
    <div className='sidebar'>
      {/* div with className title */}
      <div className='title'>
        <h1>UMS</h1>
        <div className='whoosePortal'>
          <h4>Student</h4>
        </div>
        
      
      </div>
      <hr />
      <div className='navigationUpper'>
      <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              // go to that location
              navigate(itemId);
            }}
            items={[
              {
                title: "HomePage",
                itemId: "/dashboard",
                elemBefore: () => <CgHomeAlt />,
                
              },
              {
                title: "Profile",
                itemId: "/profile",
                activeColor: '#0069d9',
                elemBefore: () => <CgProfile/>,
                
              },
              {
                title: "Registration",
                itemId: "/registration",
                elemBefore: () => <MdAppRegistration/>,
                
              },
              {
                  title: "View Grades",
                  itemId: "/view_grades",
                  // Optional
                  elemBefore: () => <CgList />,
                  
              },
              {
                  title: "Apply for Scholarship",
                  itemId: "/scholarship",
                  // Optional
                  elemBefore: () => <TbSchool />,
                  
              },
              {
                  title: "Payment",
                  itemId: "/singlecard?student_id=" + loggedInName,
                  elemBefore: () => <GrMoney />,
                  // Optional
                  subNav: [
                    {
                      title: "Smart Card",
                      itemId: "../singlecard?student_id=" + loggedInName,
                      // Optional
                      elemBefore: () => <TbSchool />,
                    },
                    {
                      title: "Payment History",
                      itemId: "../payment_list?type=single&student_id=" + loggedInName,
                      // Optional
                      elemBefore: () => <TbSchool />,
                    },
                    {
                      title: "Transaction History",
                      itemId: "../transaction_list?type=single&student_id=" + loggedInName,
                      // Optional
                      elemBefore: () => <TbSchool />,
                    },
                  ]

                  
              },
              
            ]}
            />
      </div>
      
      <hr />
      <div className='navigationLower'>
      <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              // go to that location
              navigate(itemId);
            }}
            items={[
              {
                  title: "Feedback",
                  itemId: "/feedback",
                  // Optional
                  elemBefore: () => <MdOutlineFeedback />,
                  
              },
              {
                  title: "Library",
                  itemId: "/library/student_home",
                  // Optional
                  elemBefore: () => <IoLibraryOutline />,
                  //change item color to blue
                  // activeColor: '#0069d9',
                  // // // change item text color to white
                  // activeTextColor: '#fff',
                  
              },
              {
                  title: "Medical Center",
                  itemId: "/medical/student_home",
                  // Optional
                  elemBefore: () => <MdOutlineMedicalServices />,
                  
              },
            ]}
          />
        </div>
      <hr />
            
      <div className='navigationBottom'>
      <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              // go to that location
              navigate(itemId);
            }}
            items={[
              {
                  title: "Logout",
                  itemId: "/logout",
                  // Optional
                  elemBefore: () => <CgLogOut />,
                  
              },
            ]}
          />
        </div>
      </div>
  )
}

export default Sidebar