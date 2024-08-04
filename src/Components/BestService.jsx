import { BESTSERVICES } from '../Constant'
import classes from "../assets/css/bestservice.module.css";

function BestService() {
  return (
    <div className={classes.bestservice}>
      <div className={classes.bestserviceHeading}>{BESTSERVICES.HEADING}</div>
      <div className={classes.bestserviceMainHeading}>{BESTSERVICES.MAIN_HEADING}</div>
      <div className={classes.servicesGrid}>
        {BESTSERVICES.SERVICES.map((service, index) => {
          return (
            <div className={classes.serviceCard} key={index}>
              <img src={service.SERVICE_IMAGE} alt={service.SERVICE_HEADING} />
              <div className={classes.serviceCardContent}>
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