import React from 'react'
import "../css/bestservice.css"
import { BESTSERVICES } from '../Constant'

function BestService() {
  return (
    <div className='bestservice'>
        <h3 className='bestservice-heading'>{BESTSERVICES.HEADING}</h3>
        <h3 className='bestservice-main-heading'>{BESTSERVICES.MAIN_HEADING}</h3>
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