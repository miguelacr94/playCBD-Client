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
                        // fondoDown();
                        animation();

                        setInViewport(true);
                    } else {

                        setInViewport(false);
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(screen3.current);
    }, [screen3]);


    // useEffect(() => {
    //     if (inViewport === true) {
    //         gsap.registerPlugin(ScrollTrigger);
    //         ScrollTrigger.observe({
    //             target: '#containerScreen3',
    //             type: "wheel,touch",
    //             onUp: () => '',
    //             onDown: () => fondoUp(),
    //         });
    //     }
    // })


    const fondoUp = () => {

        const tl = gsap.timeline({

        })
        tl.to('#fondo', { y: '-100vh', ease: "power1", duration: 1 }, 0)

    }
    // const fondoDown = () => {

    //     const tl = gsap.timeline({

    //     })
    //     tl.to('#fondo', { y: '0vh', ease: "power1", duration: 0.4 }, 0)

    // }






    const animation = () => {
        const tl = gsap.timeline({

        })
        tl.to('#fondo', { y: '0vh', ease: "power1", duration: 0.3 }, 0)
            .to('#imagen1S3', { y: '-100vh', opacity: 1, ease: "power1", delay: 0.3, duration: 1 }, 0)
            .to('#imagen2S3', { y: '-50vh', opacity: 1, ease: "power1", delay: 0.3, duration: 1 }, 0)
            .to('#imagen3S3', { y: '-50vh', opacity: 1, ease: "power1", delay: 0.2, duration: 1 }, 0)
    }


    return (

        <div ref={screen3} id="containerScreen2" className="w-full flex justify-center items-center flex-col absolute h-windows overflow-hidden px-2">


            <div className="w-full h-4/6  flex items-center px-2">
                <div className="flex  justify-center">
                    <img
                        id="imagen1S3"
                        src='./image/balsamolabel.png'
                        className="w-20 h-labialR mt-screenHX2"
                    />
                </div>
                <div>

                    <img
                        id="imagen2S3"
                        src='./image/antioxidante.png'
                        className="w-beneficio3 h-beneficio3 mt-screenH"
                    />
                </div>
            </div>
            <div className="w-full h-2/6 flex justify-center items-center">
                <div id="imagen3S3" className="fond-bold text-coffe text-center  flex justify-center items-center flex-col w-260 lg:h-4/6  lg:mb-4 mt-screenH">
                    <h2 className="text-textR lg:text-bold font-bold">BÁLSAMO LABIAL</h2>
                    <span className="mt-2 lg:text-cursive text-mgR">20mg CBD</span>
                    <button className="w-button h-8 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-1 m-auto">
                        conocer más
                    </button>
                </div>

            </div>







            {/* <div className="w-1/3 h-windows  lg:flex lg:justify-end lg:items-end">
                <div id="imagen2S3" className="h-4/6 w-full  flex justify-end items-center">
                    <img src='./image/antioxidante.png'
                        className="w-beneficio3 h-beneficio3"
                    />
                </div>
            </div>
            <div className="w-1/3 h-windows  flex lg:items-end justify-center">
                <div id="imagen1S3" className="w-44  lg:w-64 h-4/6 flex justify-center items-end" >
                    <img
                        src='./image/balsamolabel.png'
                        className="w-54 h-labial "
                    />
                </div>
            </div>
            <div className="w-1/3 h-windows  flex lg:items-end justify-start">
                <div id="imagen3S3" className="fond-bold text-coffe text-center flex justify-center items-center flex-col   w-260 lg:h-4/6  ">
                    <h2 className="text-bold font-bold">BÁLSAMO LABIAL</h2>
                    <span className="mt-2 text-cursive">20mg CBD</span>
                    <button className="border-2 border-coffe rounded-full w-button h-10 mt-4">Conocer más</button>
                </div>
            </div>
 */}

        </div>



    )
}

export default Screen3