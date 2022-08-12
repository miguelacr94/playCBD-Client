import React, { useEffect, useRef, useState } from 'react'
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Separator from '../../../Separator';
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
                    } else {
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(screen2.current);
    }, [screen2]);




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





    const animation = () => {
        const tl = gsap.timeline({

        })
        tl.to('#imagen1S2', { y: '-50vh', opacity: 1, ease: "power1", duration: 1 }, 0)
            .to('#imagen2S2', { y: '-100vh', opacity: 1, ease: "power1", delay: 0.3, duration: 1 }, 0)
            .to('#imagen3S2', { y: '-50vh', opacity: 1, ease: "power1", delay: 0.2, duration: 1 }, 0)
    }



    return (


        <div ref={screen2} id="containerScreen2" className="lg:w-5/6 w-full flex justify-center items-center flex-col lg:flex-row absolute h-windows overflow-hidden px-2">



            <div className="w-full h-4/6 flex items-center  lg:w-4/6">
                <div className="w-3/6 lg:flex lg:items-end lg:flex-col">
                    <div className="h-16" />
                    <img
                        id="imagen1S2"
                        src='./image/suave.svg'
                        className="lg:w-beneficio2 lg:h-beneficio2 mt-screenH opacity-0"
                    />
                </div>
                <div className="w-3/6 flex justify-end lg:justify-center px-2 ">
                    <img
                        id="imagen2S2"
                        src='./image/aceite.png '
                        className="w-aceiteR h-360 mt-screenHX2 opacity-0"
                    />
                </div>

            </div>
            <div className="w-full h-2/6  flex justify-center items-center lg:w-2/6  lg:flex lg:items-start lg:flex-col">
                <div id="imagen3S2" className="fond-bold text-coffe text-center  flex justify-center items-center flex-col w-260 lg:h-4/6  lg:mb-4 mt-screenH opacity-0">
                    <h2 className="text-textR lg:text-bold font-bold">ACEITE CARA Y CUERPO</h2>
                    <span className="mt-2 lg:text-cursive text-mgR">300mg CBD</span>
                    <button className="w-button h-8 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-1 m-auto">
                        conocer más
                    </button>
                </div>
            </div>




















            {/* <div className="w-1/3 h-windows  lg:flex lg:justify-end lg:items-end">
                <div id="imagen2S2" className="h-4/6 w-full  flex justify-end items-center">
                    <img
                        src='./image/suave.svg'
                        className="lg:w-beneficio2 lg:h-beneficio2 "
                    />
                </div>
            </div>
            <div className="w-1/3 h-windows  flex lg:items-end justify-center">
                <div id="imagen1S2" className="w-44  lg:w-64 h-auto flex justify-center items-end " >
                    <img src='./image/aceite.png '
                        className="w-54 h-aceite -mb-7"
                    />
                </div>
            </div>
            <div className="w-1/3 h-windows flex lg:items-end justify-start">
                <div id="imagen3S2" className="fond-bold text-coffe text-center  flex justify-center items-center flex-col   w-260 lg:h-4/6  lg:mb-4">
                    <h2 className="text-textR lg:text-bold font-bold">ACEITE CARA Y CUERPO</h2>
                    <span className="mt-2 lg:text-cursive text-mgR">300mg CBD</span>
                    <button className="border-2 border-coffe rounded-full w-button h-10 mt-4">Conocer más</button>
                </div>
            </div> */}
            <Separator
                Ref={RefSeparator2}
                image1="imagen1S3"
                image2="imagen2S3"
                image3="imagen3S3"
            />
        </div >




    )
}

export default Screen2