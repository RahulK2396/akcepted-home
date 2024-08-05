import classes from '../assets/css/community.module.css'
import razorpay from "../assets/Harman-Black.svg"

function Community() {
  return (
    <div className={classes.communitymain}>
      <span>OUR COMMUNITIES</span>
      <div className={classes.communityContent}>
        <div className={classes.communityLeft}>
          <span> prep
            <span className={classes.symbol}>&lt;</span>
            prep </span>
        </div>
        <img src={razorpay} alt="razorpay" className={classes.communityRight}/>
      </div>
    </div>
  )
}

export default Community