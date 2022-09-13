import React, { useState } from 'react'
import "../css/Navbar.css"

const Navbar = () => {
    let [show ,setShow]=useState(false)

    const displaySet=()=>{
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }

  return (
    <div className="nav">
    <div className="nav-one">
        <p className="nav-one-p">
            Propertybhavan
        </p>
    </div>
    <div className="nav-two">
        <ul className="nav-list-control">
            <li className="nav-list-ele nav-check">Home</li>
            <li className="nav-list-ele nav-check">List Your Property</li>
            <li className="nav-list-ele nav-check">Blog</li>
            <li className="nav-list-ele user"><i className="bi bi-person-circle user" onClick={()=>{
                displaySet()
            }}></i></li>
            {
                show?<ul className='sub-menue-holder'>
                <li className='sub-menu'>Home </li>
                <li className='sub-menu'>List Your Property</li>
                <li className='sub-menu'>Blog</li>
            </ul>:undefined
            }
            
        </ul>
    </div>
</div>
  )
}

export default Navbar
