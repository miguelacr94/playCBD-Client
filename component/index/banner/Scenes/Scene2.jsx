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

const snapConfig = {
    scrollSnapDestination: "0% 100%",
    scrollTimeout: 1,
    scrollTime: 3003
};




const Scene2 = ({ section }) => {

    const Ref = useRef(null);
    const [inViewport, setInViewport] = useState(false);

    // useEffect(() => {
    //     const onChange = entries => {
    //         entries.forEach(entry => {
    //             if (entry.target === Ref.current) {
    //                 if (entry.isIntersecting) {
    //                     setInViewport(true);
    //                     console.log('view2')
    //                 } else {
    //                     setInViewport(false);
    //                     console.log('noview2');
    //                 }
    //             }
    //         });

    //     };
    //     const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    //     observer.observe(Ref.current);
    // }, [Ref]);

    // useEffect(() => {

    //     gsap.registerPlugin(ScrollTrigger);
    //     ScrollTrigger.observe({
    //         target: '.slides',
    //         type: "wheel,touch",
    //         onUp: () => console.log('up'),
    //         onDown: () => console.log('down'),
    //     });
    // })

    // useEffect(() => {
    //     window.onscroll = function () {
    //         let elem = document.querySelector('.containerScene');
    //         let rect = elem.getBoundingClientRect();
    //         if (rect.x < 20) {
    //             elem.style.overflowY = 'scroll'
    //         } else {
    //             elem.style.overflowY = 'hidden'
    //         }
    //     }
    // });


    // useEffect(() => {

    //     gsap.registerPlugin(ScrollTrigger);

    //     const slides = [...document.querySelectorAll(".slide")];

    //     ScrollTrigger.create({
    //         trigger: ".slides",
    //         markers: true,
    //         snap: {
    //             snapTo: 1 / (slides.length + 1),
    //             duration: { min: 3, max: 6 },
    //             ease: "power2.inOut"
    //         }
    //     });


    // })

    // useScrollSnap({ ref: Ref, duration: 100, delay: 50 });





    return (


        // <div ref={Ref} classNameName="containerScene final bg-green-400 relative flex flex-col">

        <div ref={Ref} className="slides">

            <div className="slide">
                <Screen1 />

            </div>
            <div className="slide">
                <Screen2 />
            </div>
            <div className="slide">
                <Screen3 />
            </div>
            <div className="slide">5</div>
        </div>











    )
}

export default Scene2