import left from "../assets/Torus_Half.svg"
import right from "../assets/Torus_Standing.svg"
import blackarrow from "../assets/black-arrow.svg"
import classes from "../assets/css/getintouch.module.css"

function GetinTouch() {
  return (
    <div  className="bg-[#F18124] flex flex-row justify-center items-center bg-getintouchcenter bg-no-repeat bg-center lg:bg-none h-[410px]">
      <img src={left} className={classes.imgLeft}/>
      <div className={classes.content}>
        <span className={classes.subheading}>START A PROJECT</span>
        <h2 className={classes.heading}>Let&apos;s Work Together</h2>
        <button className={classes.button}> GET IN TOUCH 
          <img src={blackarrow} alt='blackarrow' />
        </button>
      </div>
      <img src={right} className={classes.imgLeft}/>
    </div>
  )
}

export default GetinTouch