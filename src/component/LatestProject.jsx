import React, { useRef, useState } from 'react'
import "../css/latestproject.css"
import { LATEST_PROJECT } from '../Constant'
import arrow from "../images/arrow.svg"
import blackarrow from "../images/black-arrow.svg"

function LatestProject() {
    const galleryRef = useRef(null);

    const handleScroll = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };
    return (
        <div className='latestproject'>
            <div className="latestproject-grid">
                <div>
                <p className='latestproject-heading'>{LATEST_PROJECT.HEADING}</p>
                <p className='latestproject-company'>{LATEST_PROJECT.COMPANY_NAME}
                    <img src={blackarrow} alt='blackarrow' />
                </p>
                </div>
            </div>
            <div className="project-grid">

                <div className="image-gallery" ref={galleryRef}>
                    {LATEST_PROJECT.PROJECT.map((img, index) => (
                        <img key={index} src={img.IMAGE} alt={`image-${index}`} className="gallery-image" />
                    ))}
                </div>
                <button onClick={handleScroll} className="scroll-button">
                    <img src={arrow} alt='arrow' />
                </button>

            </div>


        </div>
    )
}

export default LatestProject