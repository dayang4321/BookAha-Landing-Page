import React from 'react'
import './NavButton.css'

const navButton = (props) => {
    return (
        <button className={"navbar-toggler mx-2 mx-sm-3" + props.navButtonClass} type="button" data-toggle="collapse" data-target="#responsive-navbar-nav"
        aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>props.clicked()}> 
        <div className="animated-icon1"><span></span><span></span><span></span></div>
      </button>
    )
}


export default navButton