import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} className=' h-20 mb-[-20px] mt-[-20px]'/>
    </div>
  )
}

export default Logo