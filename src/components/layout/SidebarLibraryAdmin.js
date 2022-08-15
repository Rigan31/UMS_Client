import React from 'react'
import LeftSideLibraryAdmin from '../leftside/LeftSideLibraryAdmin'

const SidebarLibraryAdmin = () => { 
  return (
    <div style={myStyle}>
        <LeftSideLibraryAdmin />
    </div>
  )
}

const myStyle = {
  float: 'left',
  width: '30%',
  height: '100%',
  borderRight: '5px solid black' 
}

export default SidebarLibraryAdmin