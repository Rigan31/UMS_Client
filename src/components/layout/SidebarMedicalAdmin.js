import React from 'react'
import LeftSideMedicalAdmin from '../leftside/LeftSideMedicalAdmin'

const SidebarMedicalAdmin = () => { 
  return (
    <div style={myStyle}>
        <LeftSideMedicalAdmin />
    </div>
  )
}

const myStyle = {
  float: 'left',
  width: '30%',
  height: '100%',
  borderRight: '5px solid black' 
}

export default SidebarMedicalAdmin