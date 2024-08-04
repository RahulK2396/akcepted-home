import React from 'react'
import "../css/bestservice.css"
import { BESTSERVICES } from '../Constant'

function BestService() {
  return (
    <div className='bestservice'>
        <div className='bestservice-heading'>{BESTSERVICES.HEADING}</div>
        <div className='bestservice-main-heading'>{BESTSERVICES.MAIN_HEADING}</div>
        <div  className="services-grid">
            {BESTSERVICES.SERVICES.map((service)=>{
                return(
                    <div className='service-card'>
                        <img src={service.SERVICE_IMAGE} alt={service.SERVICE_HEADING} />
                        <div className='service-card-content'>
                            <h3>{service.SERVICE_HEADING}</h3>
                            <p>{service.SERVICE_CATEGORY}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BestService