import React from 'react'
import LeftSideHead from '../leftside/LeftsideHead'

const SidebarHead= () => { 
  return (
    <div style={myStyle}>
        <LeftSideHead />
    </div>
  )
}

const myStyle = {
  float: 'left',
  width: '30%',
  height: '100%',
  borderRight: '5px solid black' 
}

export default SidebarHead