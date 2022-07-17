import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
const Screen3 = () => {


    const [inViewport, setInViewport] = useState(false);
    const screen3 = useRef(null);
    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === screen3.current) {
                    if (entry.isIntersecting) {
                        animation();
                        console.log('view3')

                    } else {

                        console.log('noview3')

                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(screen3.current);
    }, [screen3]);

    // useEffect(() => {
    //     if (inViewport) {
    //         const containerScreen3 = document.querySelector('#containerSceen3');
    //         gsap.registerPlugin(ScrollTrigger);
    //         ScrollTrigger.create({
    //             trigger: containerScreen3,
    //             onEnter: function () {
    //                 animation();
    //                 console.log('enter')
    //             },
    //             onEnterBack: function () {
    //                 console.log('abajo1')
    //                 animation2();
    //             },
    //             onLeave: function () {
    //                 console.log('arriba1')

    //             } // assure that the element is hidden when scrolled into view
    //         });
    //     }

    // });


    const animation = () => {
        const tl = gsap.timeline({

        })
        tl.to('#imagen1S3', { y: '-20vh', ease: "power1", duration: 1 }, 0)
            .to('#imagen2S3', { y: '-20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)
    }

    const animation2 = () => {
        const tl = gsap.timeline({

        })
        tl.to('#imagen1S3', { y: '20vh', ease: "power1", duration: 1 }, 0)
            .to('#imagen2S3', { y: '20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)

    }




    return (


        <div ref={screen3} id="containerScreen3" className="flex justify-center items-end absolute h-windows">

            <div id="imagen1S3" className="w-64 h-64 bg-red-400 relative m-2">1</div>
            <div id="imagen2S3" className="w-64 h-64 bg-red-300 relative m-2">2</div>
            <div className="w-full"></div>
        </div>



        // <div ref={outerRef} className="flex flex-col w-full">
        //     <div className="h-separatorSection w-full bg-grey panel" />


        //     <div className="w-full flex bg-red-400 lg:h-windows h-auto py-2 lg:py-0 justify-center items-center flex-col-reverse lg:flex-row">
        //         <div className=" w-full lg:w-1/3 flex lg:justify-end justify-center items-center">
        //             <div className="flex lg:justify-end justify-center items-center flex-col text-center w-250 lg:w-auto text-coffe">
        //                 <h2 className="text-bold font-bold">BÁLSAMO LABIAL</h2>
        //                 <span className="mt-2 text-cursive">20mg CBD</span>
        //                 <button className="border-2 border-coffe rounded-full w-button h-10 mt-11">Conocer más</button>
        //             </div>
        //         </div>
        //         <div className="w-full lg:w-1/3 lg:h-labial h-img flex justify-center ">
        //             <img
        //                 src='./image/balsamolabel.png'
        //                 classname="lg:h-labial h-img w-labial"
        //             />
        //         </div>

        //         <div className="w-full lg:w-1/3 flex lg:justify-start justify-center items-center">
        //             <img src='./image/antioxidante.png'
        //                 className="lg:w-image w-60"
        //             />

        //         </div>
        //     </div>


        //     <div className="h-separatorSection w-full bg-grey panel" />

        // </div>
        // <div ref={screen3} id="containerSceen3" className="w-full h-windows flex items-center bg-blue-400 relative">

        //     <div className="w-full flex bg-red-400 lg:h-windows h-auto py-2 lg:py-0 justify-center items-center flex-col-reverse lg:flex-row">
        //         <div className=" w-full lg:w-1/3 flex lg:justify-end justify-center items-center">
        //             <div className="flex lg:justify-end justify-center items-center flex-col text-center w-250 lg:w-auto text-coffe">
        //                 <h2 className="text-bold font-bold">BÁLSAMO LABIAL</h2>
        //                 <span className="mt-2 text-cursive">20mg CBD</span>
        //                 <button className="border-2 border-coffe rounded-full w-button h-10 mt-11">Conocer más</button>
        //             </div>
        //         </div>
        //         <div id="imagen1S3" className="w-full lg:w-1/3 lg:h-labial h-img flex justify-center ">
        //             <img
        //                 src='./image/balsamolabel.png'
        //                 classname="lg:h-labial h-img w-labial"
        //             />
        //         </div>

        //         <div id="imagen2S3" className="w-full lg:w-1/3 flex lg:justify-start justify-center items-center">
        //             <img src='./image/antioxidante.png'
        //                 className="lg:w-image w-60"
        //             />

        //         </div>
        //     </div>


        //     <div id="separator11" className="bg-transparent h-4 w-full absolute" />
        //     <div id="separator1S3" className="bg-transparent h-4 w-full absolute mt-separatorScreen" />
        //     <div id="separator12" className="bg-transparent h-4 w-full absolute -mt-separatorScreen" />
        // </div>


    )
}

export default Screen3