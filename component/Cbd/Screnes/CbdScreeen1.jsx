import React, { useEffect, useRef } from 'react'
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";


const CbdScreeen1 = () => {

    const CbdRef = useRef(null);
    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === CbdRef.current) {
                    if (entry.isIntersecting) {
                        animation();
                    } else {
                        // animation2();
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(CbdRef.current);
    }, [CbdRef]);




    const animation = () => {
        setTimeout(() => {
            const tl = gsap.timeline({

            })
            tl.to('#oil', { y: '-50vh', ease: "power1", opacity: 1, duration: 1 }, 0)
                .to('#quimica', { y: '-50vh', ease: "power1", opacity: 1, delay: 0.3, duration: 1 }, 0)
                .to('#cbd', { y: '-20vh',ease: "power1", opacity: 1, delay: 0.5, duration: 2 }, 0)
        }, 0);


    }


    // useEffect(() => {
    //     const slide = document.querySelectorAll('.slide');
    //     const tlBn = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.slides',
    //             start: () => `${slide[0].clientHeight * 0}px`,
    //             end: () => `${slide[0].clientHeight * 1}px`,
    //             scrub: true,
    //             duration: 2,
    //             markers: true,

    //         }
    //     });
    //     tlBn.to('#cbd', { y: '-20vh', opacity: 1, ease: "none" }, 0)
    // });
    useEffect(() => {
        const slide = document.querySelectorAll('.slide');
        const tlBn = gsap.timeline({
            scrollTrigger: {
                trigger: '.slides',
                start: () => `${slide[0].clientHeight * 8}px`,
                end: () => `${slide[0].clientHeight * 9}px`,
                scrub: true,
                duration: 2,
                markers: true,

            }
        });
        tlBn.to('#cbd', { y: '-80vh', opacity: 1, ease: "none" }, 0)
    });



    return (
        <div ref={CbdRef} className="flex flex-col w-full px-2 justify-center items-center h-windows">

            <div id="oil" className="w-full h-3/6 flex justify-end items-end opacity-0">
                <img
                    src="./image/oil.png"

                />
            </div>
            <div id="quimica" className="w-full h-3/6 flex flex-center -mb-ScreenFullvh  px-4 opacity-0">
                <img
                    src="./image/compuestos.png "
                    className="h-3/6 w-5/6"
                />
            </div>
        </div>
    )
}

export default CbdScreeen1