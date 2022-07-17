import React, { useEffect } from 'react';
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";

const ImgBanner = ({ clop, containerClop }) => {

    useEffect(() => {

      
        if (clop) {
            gsap.to(
                '#imgBanner', {
                xPercent: -20 * clop,
                duration: 6,
                delay: 2,
                ease: "none",
                scrollTrigger: {
                    scrub: true,
                    end: () => "+=" + (containerClop / 5) * 5,
                }
            });
            console.log(clop, containerClop)
        }

    }, [clop, containerClop])




    return (


        <div id="imgBanner" className=" w-full h-windows absolute flex">
            <div className="w-banner ">
                <img
                    src="./banner.svg"
                    className="w- h-windows relative"
                />
            </div>
            <div className="w-100  ">
                <div className=" w-115 h-windows fondo -ml-fondo ">
                </div>
            </div>

        </div>



    )
}

export default ImgBanner