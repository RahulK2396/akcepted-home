import { useEffect, useRef } from 'react'
import classes from "../assets/css/latestproject.module.css"
import { LATEST_PROJECT } from '../Constant'
import arrow from "../assets/arrow.svg"
import blackarrow from "../assets/black-arrow.svg"
import backgroundImage from "../assets/grapes.svg"

function LatestProject() {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (galleryRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
                if (scrollLeft + clientWidth >= scrollWidth) {
                    galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    galleryRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' }); 
                }
            }
        }, 2500);

        return () => clearInterval(scrollInterval);
    }, []);

    const handleScroll = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };
    return (
        <div className={classes.latestproject}>
            <div className={classes.latestprojectGrid}>
                <div>
                    <p className={classes.latestprojectHeading}>{LATEST_PROJECT.HEADING}</p>
                    <p className={classes.latestprojectCompany}>{LATEST_PROJECT.COMPANY_NAME}
                        <img src={blackarrow} alt='blackarrow' />
                    </p>
                </div>
            </div>
            <div className={classes.projectGrid}>
                <div className={classes.imageGallery} ref={galleryRef}>
                    {LATEST_PROJECT.PROJECT.map((img, index) => (
                        <img key={index} src={img.IMAGE} alt={`image-${index}`} className={classes.galleryImage} />
                    ))}
                </div>
                <button onClick={handleScroll} className={classes.scrollButton}>
                    <img src={arrow} alt='arrow' />
                </button>
            </div>
            <img src={backgroundImage} alt="Background" className={classes.backgroundImage} />
        </div>
    )
}

export default LatestProject