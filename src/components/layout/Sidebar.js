import React from 'react'
import LeftSide from '../leftside/Leftside'

const Sidebar = () => { 
  return (
    <div style={myStyle}>
        <LeftSide />
    </div>
  )
}

const myStyle = {
  float: 'left',
  width: '30%',
  height: '100%',
  borderRight: '5px solid black' 
}

export default Sidebar