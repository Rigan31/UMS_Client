import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../../assets/css/SideBar.css'
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
  return (
    <div className='sidebar'>
      {/* div with className title */}
      <div className='title'>
        <h1>UMS</h1>
      
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
                itemId: "/",
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
                  title: "Dues Status",
                  itemId: "/dues",
                  // Optional
                  elemBefore: () => <GrMoney />,
                  
              },
              // {
              //     title: "Registration",
              //     itemId: "/registration",
              //     subNav: [
              //       {
              //         title: "Teams",
              //         itemId: "/another/teams"
              //         // Optional
              //         // elemBefore: () => <Icon name="calendar" />
              //       }
              //     ]
              // },
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
                  itemId: "/library_student_home",
                  // Optional
                  elemBefore: () => <IoLibraryOutline />,
                  //change item color to blue
                  // activeColor: '#0069d9',
                  // // // change item text color to white
                  // activeTextColor: '#fff',
                  
              },
              {
                  title: "Medical Center",
                  itemId: "/medical_student_home",
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