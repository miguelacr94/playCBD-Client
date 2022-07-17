import React, { useEffect, useRef, useState } from 'react'
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { motion } from "framer-motion";
const Screen2 = () => {

    const [inViewport, setInViewport] = useState(false);
    const screen2 = useRef(null);
    const RefSeparator2 = useRef(null);


    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === screen2.current) {
                    if (entry.isIntersecting) {
                        animation();
                        console.log('view')
                    } else {

                        console.log('noview')

                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(screen2.current);
    }, [screen2]);


    //separator screen2
    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === RefSeparator2.current) {
                    if (entry.isIntersecting) {     
                        animation2();
                    } else {        
                        // animation2();
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(RefSeparator2.current);
    }, [RefSeparator2]);



    // useEffect(() => {
    //     // if (inViewport) {
    //         const img1 = document.querySelector('imagen');
    //         console.log(img1);
    //     const containerScreen2 = document.querySelector('#containerScreen2');
    //     gsap.registerPlugin(ScrollTrigger);
    //     ScrollTrigger.create({
    //         trigger: containerScreen2,
    //         onEnter: function () {
    //             animation();
    //             console.log('enter')
    //         },
    //         onEnterBack: function () {
    //             console.log('abajo1')
    //             animation2();
    //         },
    //         onLeave: function () {
    //             console.log('arriba1')

    //         } // assure that the element is hidden when scrolled into view
    //     });

    //     // }


    // });
    // useEffect(() => {
    //     if (inViewport) {
    //         gsap.registerPlugin(ScrollTrigger);
    //         ScrollTrigger.create({
    //             trigger: '#separator1S2',
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
    // })





    const animation = () => {
        const tl = gsap.timeline({

        })
        tl.to('#imagen1S2', { y: '-20vh', ease: "power1", duration: 1 }, 0)
            .to('#imagen2S2', { y: '-20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)
    }

    const animation2 = () => {
        const tl = gsap.timeline({

        })
        tl.to('#imagen1S3', { y: '20vh', ease: "power1", duration: 1 }, 0)
            .to('#imagen2S3', { y: '20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)

    }



    return (


        <div ref={screen2} id="containerScreen2" className="flex justify-center items-end absolute h-windows">

            <div id="imagen1S2" className="w-64 h-64 bg-red-400 relative m-2">1</div>
            <div id="imagen2S2" className="w-64 h-64 bg-red-300 relative m-2">2</div>
            <div ref={RefSeparator2} className="w-full h-8 bg-grey absolute">--</div>
        </div>

        // <div className="flex flex-col w-full">

        //     <div id="separatorStart2" className="h-separatorSection w-full bg-grey panel" />
        //     <motion.div
        //         ref={Section2} id='containerSection1' className="w-full flex flex-col lg:flex-row py-2 lg:py-0 justify-center items-center h-auto lg:h-banner bg-blue-300 ">
        //         <div className="w-full lg:w-1/3 flex justify-center items-center h-auto lg:h-windows">
        //             <div id="img11"
        //                 className="w-60 h-80 lg:w-344 lg:h-508  flex justify-center items-end lg:items-start  lg:m-2 p-2 lg:-mt-12">
        //                 <img src='./image/suave.svg'
        //                     className="w-full"
        //                 />
        //             </div>
        //         </div>
        //         <div className="w-full lg:w-1/3 flex justify-center h-606 lg:h-aceite">
        //             <div id="img1Screen2" className="w-44 h-606 lg:w-52 h-606 lg:h-aceite  mx-8 my-2 " >
        //                 <img src='./image/aceite.png' />
        //             </div>
        //         </div>
        //         <div className="w-full lg:w-1/3 flex justify-center">
        //             <div id="img2Screen2" className="fond-bold text-coffe text-center  flex justify-center items-center flex-col lg:m-2  w-260 lg:h-aceite">
        //                 <h2 className="text-textR lg:text-bold font-bold">ACEITE CARA Y CUERPO</h2>
        //                 <span className="mt-2 lg:text-cursive text-mgR">300mg CBD</span>
        //                 <button className="border-2 border-coffe rounded-full w-button h-10 mt-11">Conocer más</button>
        //             </div>
        //         </div>
        //     </motion.div>
        //     <div id="separatorEnd2" className="h-separatorSection w-full bg-grey panel" />
        // </div>
        // <div ref={screen2} id="containerSceen2" className="w-full lg:h-120 flex items-center bg-blue-400 relative">

        //     <motion.div
        //         ref={Section2} id='containerSection1' className="w-full flex flex-col lg:flex-row py-2 lg:py-0 justify-center items-center h-auto lg:h-banner bg-blue-300 ">
        //         <div className="w-full lg:w-1/3 flex justify-center items-center h-auto lg:h-windows">
        //             <div id="imagen1S2"
        //                 className="w-60 h-80 lg:w-344 lg:h-508  flex justify-center items-end lg:items-start  lg:m-2 p-2 lg:-mt-12">
        //                 <img src='./image/suave.svg'
        //                     className="w-full"
        //                 />
        //             </div>
        //         </div>
        //         <div className="w-full lg:w-1/3 flex justify-center h-606 lg:h-aceite">
        //             <div id="imagen2S2" className="w-44 h-606 lg:w-52 h-606 lg:h-aceite  mx-8 my-2 " >
        //                 <img src='./image/aceite.png' />
        //             </div>
        //         </div>
        //         <div className="w-full lg:w-1/3 flex justify-center">
        //             <div id="img2Screen2" className="fond-bold text-coffe text-center  flex justify-center items-center flex-col lg:m-2  w-260 lg:h-aceite">
        //                 <h2 className="text-textR lg:text-bold font-bold">ACEITE CARA Y CUERPO</h2>
        //                 <span className="mt-2 lg:text-cursive text-mgR">300mg CBD</span>
        //                 <button className="border-2 border-coffe rounded-full w-button h-10 mt-11">Conocer más</button>
        //             </div>
        //         </div>
        //     </motion.div>

        //     <div id="separator11" className="bg-transparent h-4 w-full absolute" />
        //     <div id="separator1S2" className="bg-transparent h-4 w-full absolute mt-separatorScreen" />
        //     <div id="separator12" className="bg-transparent h-4 w-full absolute -mt-separatorScreen" />
        // </div >


    )
}

export default Screen2