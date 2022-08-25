import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";
import { useNavigate, useLocation } from "react-router-dom";
import {CgHomeAlt} from "react-icons/cg";
import {CgProfile} from "react-icons/cg";
import {CgFileDocument} from "react-icons/cg";
import {CgList} from "react-icons/cg";
// import {CgProfile} from "react-icons/cg";
// import {CgProfile} from "react-icons/cg";
// import {CgProfile} from "react-icons/cg";
// import {CgProfile} from "react-icons/cg";
// import {CgProfile} from "react-icons/cg";


const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
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
              // Optional
              elemBefore: () => <CgHomeAlt />,
              
            },
            {
              title: "Profile",
              itemId: "/profile",
              elemBefore: () => <CgProfile />,
            },
            {
              title: "Add Student",
              itemId: "/add_student",
              elemBefore: () => <CgFileDocument/>,
              
            },
            {
                title: "Logout",
                itemId: "/logout",
                // Optional
                elemBefore: () => <CgHomeAlt />,
                
            },

          ]}
        />
  )
}

export default Sidebar