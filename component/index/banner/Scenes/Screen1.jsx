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
                    } else {
                        // animation2();
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(outerRef.current);
    }, [outerRef]);


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

            })
            tl.to('#img1S1', { y: '-100vh', ease: "power1", opacity: 1, duration: 1 }, 0)
                .to('#img2S1', { y: '-100vh', ease: "power1", opacity: 1, delay: 0.3, duration: 1 }, 0)
                .to('#img3S1', { y: '-100vh', ease: "power1", opacity: 1, delay: 0.2, duration: 1 }, 0)
        }, 0);


    }


    return (


        <div ref={outerRef} id="containerScreen1" className="w-5/6 flex  flex-col-reverse lg:flex-row justify-center items-center lg:items-start absolute h-windows ">

            {/* <div className=" hidden lg:block lg:w-1/3 h-windows"></div>

            <div className="lg:w-1/3 w-full h-windows flex flex-col items-end justify-end bg-red-400">
                <div className="h-3/6 w-full flex justify-center lg:justify-end ">
                    <img
                        id="img1S1"
                        src="./image/balsamo.png"
                        className="w-48 h-48 lg:w-64 lg:h-64 m-auto  relative"
                    />
                </div>



                <div className="h-3/6 w-full ">
                    <div id="img3S1" className="text-center text-coffe  w- lg:w-auto">
                        <h2 className="font-bold lg:text-bold text-textR ">BÁLSAMO ANTIINFLAMATORIO</h2>
                        <p className="mt-2 text-mgR lg:text-cursive ">750mg CBD</p>
                        <button className="w-button h-10 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-4 m-auto">
                            conocer más
                        </button>
                    </div>
                </div>
            </div>


            <div className="lg:w-1/3 h-windows flex items-center lg:items-start justify-start bg-green-400">
                <div id="img3S1" className="h-3/6 w-full  flex justify-start items-center">
                    <img
                        src='./image/antioxidante.svg'
                        className="w-60 h-54 lg:w-64 lg:h-64"
                    />
                </div>
            </div> */}

            <div className=" hidden lg:block lg:w-1/3 h-windows overflow-hidden"></div>

            <div className="lg:w-1/3 w-full lg:h-windows lg:flex lg:items-center">
                <div className="h-BigItemvh w-full  flex flex-col justify-start items-center px-2 ">
                    <img
                        id="img1S1"
                        src="./image/balsamo.png"
                        className="w-44 h-44 lg:w-64 lg:h-64 relative mt-screenH opacity-0"
                    />
                    <div id="img3S1" className="text-center text-coffe opacity-0 ">
                        <h2 className="font-bold lg:text-bold text-textR ">BÁLSAMO ANTIINFLAMATORIO</h2>
                        <p className="mt-1 text-mgR lg:text-cursive ">750mg CBD</p>
                        <button className="w-button h-8 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-1 m-auto">
                            conocer más
                        </button>
                    </div>

                </div>

            </div>

            <div className="h-Itemvh lg:h-BigItemvh w-full lg:w-1/3 flex justify-center items-end">
                <img
                    id="img2S1"
                    src="./image/antioxidante.svg"
                    className="w-44 h-44 lg:w-64 lg:h-64 relative -mb-screenH opacity-0"
                />
            </div>

            <Separator
                Ref={RefSeparator1}
                image1="imagen1S2"
                image2="imagen2S2"
                image3="imagen3S2"
            />

        </div >




    )
}

export default Screen1


