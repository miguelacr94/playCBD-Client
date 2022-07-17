import React, { useRef, useEffect, useState } from "react";
import { Tween, Timeline, } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { animation } from "../../../../provider/animations/actions";
import { useIntersection } from 'react-use';
import Separator from "../../../Separator";
const Screen1 = ({ id }) => {


    const outerRef = useRef(null);
    const RefSeparator1 = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === outerRef.current) {
                    if (entry.isIntersecting) {

                        animation();
                        console.log('animation view')
                    } else {


                        // animation2();

                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(outerRef.current);
    }, [outerRef]);





    //separator screen2
    // useEffect(() => {
    //     const onChange = entries => {
    //         entries.forEach(entry => {
    //             if (entry.target === RefSeparator1.current) {
    //                 if (entry.isIntersecting) {
    //                     animation2();
    //                 } else {
    //                     // animation2();
    //                 }
    //             }
    //         });
    //     };
    //     const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    //     observer.observe(RefSeparator1.current);
    // }, [RefSeparator1]);



    // useEffect(() => {
    //     if (intersection && intersection.intersectionRatio < 1) {
    //         const containerScreen1 = document.querySelector('#containerScreen1');
    //         gsap.registerPlugin(ScrollTrigger);
    //         ScrollTrigger.create({
    //             trigger: containerScreen1,
    //             onEnter: function () {
    //                 animation();
    //                 console.log('enter')
    //             },
    //             onEnterBack: function () {
    //                 console.log('abajo1')
    //                 // animation2();
    //             },
    //             onLeave: function () {
    //                 console.log('arriba1')
    //                 // animation();
    //             } // assure that the element is hidden when scrolled into view
    //         });

    //     }

    // });



    // useEffect(() => {
    //     if (inViewport) {
    //         gsap.registerPlugin(ScrollTrigger);
    //         ScrollTrigger.create({
    //             trigger: '#separator1',
    //             onEnter: function () {
    //                 animation();
    //                 console.log('enter1')
    //             },
    //             onEnterBack: function () {
    //                 // animate3()
    //                 // animate4()
    //                 // animationEnd();
    //                 console.log('abajo1')
    //                 animation2();
    //             },
    //             onLeave: function () {
    //                 // animate();
    //                 // animate2();
    //                 // animationStart();
    //                 console.log('arriba1')

    //             } // assure that the element is hidden when scrolled into view
    //         });
    //     }
    // })



    // useEffect(() => {

    //     gsap.registerPlugin(ScrollTrigger);
    //     ScrollTrigger.observe({
    //         target: '#containerScreen1',
    //         type: "wheel,touch",
    //         onUp: () => console.log('up'),
    //         onDown: () => console.log('up'),
    //     });
    // })

    // const handleAnimation = () => {
    //     animation();
    // }


    const animation = () => {
        setTimeout(() => {
            const tl = gsap.timeline({
                //   scrollTrigger: {
                //     toggleActions: "none reset restart"
                //   }
            })
            tl.to('#img1S1', { y: '-20vh', ease: "power1", duration: 1 }, 0)
                .to('#img2S1', { y: '-20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)

        }, 0);


    }
    // const animation2 = () => {
    //     setTimeout(() => {
    //         const tl = gsap.timeline({

    //         })
    //         tl.to('#imagen1S2', { y: '20vh', ease: "power", duration: 1 }, 0)
    //             .to('#imagen2S2', { y: '20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)

    //     }, 0);

    // }




    return (


        <div ref={outerRef} id="containerScreen1" className="flex justify-center items-end absolute h-windows">


            <div id="img1S1" className="w-64 h-64 bg-red-400 relative m-2">1</div>
            <div id="img2S1" className="w-64 h-64 bg-red-300 relative m-2">2</div>
            {/* <div ref={RefSeparator1} className="w-full h-8 bg-grey absolute">--</div> */}
            <Separator
                Ref={RefSeparator1}
                image1="imagen1S2"
                image2="imagen2S2"
            />

        </div >



        // <div ref={outerRef} id="container1" className="w-full lg:h-120 flex items-center justify-center items-center bg-blue-400 relative">

        //     <motion.div
        //         id="containerScreen1"
        //         className="w-full h-110 lg:h-120  py-2 lg:py-0  flex  flex-col-reverse lg:flex-row justify-center items-center lg:items-start  bg-green-300 panel">
        //         <div className="w-1/3 hidden lg:block" />
        //         <div className="w-full lg:w-1/3">
        //             <motion.div id="imagen" className="flex relative justify-center  lg:items-start items-center flex-col  lg:mt-0 ">
        //                 <img
        //                     src="./image/balsamo.png"
        //                     className="w-60 h-56 lg:w-400 lg:h-img m-auto "
        //                 />
        //                 <div className="text-center text-coffe mt-10 w-292 lg:w-auto">
        //                     <h2 className="font-bold lg:text-bold text-textR ">BÁLSAMO ANTIINFLAMATORIO</h2>
        //                     <p className="mt-2 text-mgR lg:text-cursive ">750mg CBD</p>
        //                 </div>
        //                 <button className="w-button h-10 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-10 m-auto">
        //                     conocer más
        //                 </button>
        //             </motion.div>

        //         </div>
        //         <div className="w-full lg:w-1/3 flex justify-center">
        //             <motion.div id="imagen2" className="w-60 h-44  lg:w-344 lg:h-247 flex justify-center lg:items-start lg:mt-12">
        //                 <img
        //                     src='./image/antioxidante.svg'
        //                     className="w-60 h-44 lg:w-344 lg:h-247"
        //                 />
        //             </motion.div>
        //         </div>
        //         {/* se encargan de detectar la entrada del top para realizar las animaciones */}
        //         <div id="separator11" className="bg-transparent h-4 w-full absolute" />
        //         <div id="separator1" className="bg-transparent h-4 w-full absolute mt-separatorScreen" />
        //         <div id="separator12" className="bg-transparent h-4 w-full absolute -mt-separatorScreen" />
        //     </motion.div>

        // </div >

    )
}

export default Screen1


