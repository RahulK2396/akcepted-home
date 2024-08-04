import React from 'react'
import "../css/community.css"
import razorpay from "../images/Harman-Black.svg"
function Community() {
  return (
    <div className='communitymain'>
        <span>OUR COMMUNITIES</span>
        <div className='community-content'>
            <div className='community-left'>
                <span> prep
                    <span className='symbol'>&lt;</span>
                        ent </span>
            </div>
            <img src={razorpay} alt="razorpay" className='community-right'/>
        </div>
    </div>
  )
}

export default Community