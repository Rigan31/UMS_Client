import React from 'react'
import LeftSideAdmin from '../leftside/LeftsideAdmin'

const SidebarAdmin = () => { 
  return (
    <div style={myStyle}>
        <LeftSideAdmin />
    </div>
  )
}

const myStyle = {
  float: 'left',
  width: '30%',
  height: '100%',
  borderRight: '5px solid black' 
}

export default SidebarAdmin