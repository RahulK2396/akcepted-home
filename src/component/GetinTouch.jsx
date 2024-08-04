import React from 'react'
import "../css/getintouch.css"
import left from "../images/Torus_Half.svg"
import right from "../images/Torus_Standing.svg"
import blackarrow from "../images/black-arrow.svg"

function GetinTouch() {
  return (
    <div className='getintouchmain'>
<img src={left} className='img-left'/>
        <div className="content">
            <span className="subheading">START A PROJECT</span>
            <h2 className="heading">Let's Work Together</h2>
            <button className="button"> GET IN TOUCH 
            <img src={blackarrow} alt='blackarrow' />
            </button>
        </div>
        <img src={right} className='img-left'/>


    </div>
  )
}

export default GetinTouch