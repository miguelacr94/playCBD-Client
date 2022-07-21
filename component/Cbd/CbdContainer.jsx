import React, { useEffect } from 'react'
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




const CbdContainer
    = () => {


        useEffect(() => {
            const slide = document.querySelectorAll('.slide');
            const tlBn = gsap.timeline({
                scrollTrigger: {
                    trigger: '.slides',
                    start: () => `${slide[0].clientHeight * 1}px`,
                    end: () => `${slide[0].clientHeight * 2}px`,
                    scrub: true,
                    duration: 2,
                    markers: true,

                }
            });
            tlBn.to('#cbd', { y: '10%', opacity: 1, ease: "none" }, 0)
        });


        return (
            <div className="slides">

                <div className="slide h-windows bg-red-400">
                    1

                </div>
                <div className="slide h-windows bg-green-400">
                    2
                </div>
                <div className="slide h-windows bg-orange-400">
                    3
                </div>

            </div>
        )
    }

export default CbdContainer
