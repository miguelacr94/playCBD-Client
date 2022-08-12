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
                        console.log('view')
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

            if (screen.width < 500) {

                tl.to('#oil', { y: '-100vh', ease: "power1", opacity: 1, duration: 1 }, 0)
                    .to('#quimica', { y: '-0vh', ease: "power1", opacity: 1, delay: 0.3, duration: 1 }, 0)
                    .to('#cbd', { y: '-20vh', ease: "power1", opacity: 1, delay: 0.5, duration: 2 }, 0)
            } else {

                tl.to('#oil', { y: '-100vh', ease: "power1", opacity: 1, duration: 1 }, 0)
                    .to('#quimica', { y: '-100vh', ease: "power1", opacity: 1, delay: 0.3, duration: 1 }, 0)
                    .to('#cbd', { y: '-20vh', ease: "power1", opacity: 1, delay: 0.5, duration: 1 }, 0)
            }
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
    // useEffect(() => {
    //     const slide = document.querySelectorAll('.slide');
    //     const tlBn = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.slides',
    //             start: () => `${slide[0].clientHeight * 4}px`,
    //             end: () => `${slide[0].clientHeight * 5}px`,
    //             scrub: true,
    //             duration: 2,
    //             markers: true,

    //         }
    //     });
    //     tlBn.to('#cbd', { y: '-80vh', opacity: 1, ease: "none" }, 0)
    // });



    return (
        <div ref={CbdRef} className="flex flex-col lg:flex-row-reverse  w-full px-2 justify-center items-center h-windows lg:w-4/6 py-8 mt-16 lg:mt-0 overflow-hidden">

            <div id="oil" className="w-full lg:w-3/6 h-3/6 flex justify-end lg:justify-start items-end opacity-1">
                <img
                    src="./image/oil.png"
                    className=" lg:w-300 lg:h-200 -mb-screenH "
                />
            </div>
            <div id="quimica" className="w-full lg:w-3/6 h-3/6 flex flex lg:justify-center lg:items-end lg:ml-  px-4 opacity-1 ">
                <img
                    src="./image/compuestos.png "
                    className="h-3/6 w-5/6 lg:w-400 lg:h-190 -mt-11 lg:mt-0 lg:w-300 lg:ml-compuestos -mb-screenH "
                />
            </div>
        </div>
    )
}

export default CbdScreeen1