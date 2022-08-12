import React, { useEffect, useRef, useState } from 'react'
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import Screen1 from './screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import ScreenInitial from './scene1/ScreenInitial';
import useScrollSnap from 'react-use-scroll-snap';
import createScrollSnap from 'scroll-snap'
import { animation } from '../../../../provider/animations/actions';
import Separator from '../../../Separator';
import CbdScreeen1 from '../../../Cbd/Screnes/CbdScreeen1';
import CbdScreen2 from '../../../Cbd/Screnes/CbdScreen2';

const Scene2 = ({ section }) => {
    const RefBackCbd0 = useRef(null);
    const imgUpDown = useRef(null);
    const Ref = useRef(null);
    const [inViewport, setInViewport] = useState(false);





    return (


        // <div ref={Ref} classNameName="containerScene final bg-green-400 relative flex flex-col">

        <div ref={Ref} className="slides">

            {/* <div className="slide h-windows flex justify-center items-center">
                <Separator
                    Ref={RefSeparator0}
                    image1="img1S1"
                    image2="img2S1"
                    image3="img3S1"
                />

            </div> */}

            <div className="slide h-windows ">
                <Screen1 />

            </div>
            <div className="slide h-windows">
                <Screen2 />
            </div>
            <div className="slide h-windows ">
                <Screen3 />
            </div>
            <div className="slide h-windows flex justify-center items-center">
                <Separator
                    Ref={RefBackCbd0}
                    image1="oil"
                    image2="quimica"
                // image3="img3S1"
                />
            </div>
            <div className="slide h-windows  ">
                <CbdScreeen1 />
            </div>
            <div className="slide h-windows ">
                <CbdScreen2 />
            </div>
        </div>











    )
}

export default Scene2