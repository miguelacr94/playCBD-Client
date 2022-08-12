import React, { useEffect, useRef } from 'react'
import { Tween, Timeline, } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const CbdScreen2 = () => {
    const RefCbd2 = useRef(null);


    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === RefCbd2.current) {
                    if (entry.isIntersecting) {
                        animation();
                    } else {
                        // animation2();
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(RefCbd2.current);
    }, [RefCbd2]);



    const animation = () => {
        setTimeout(() => {
            const tl = gsap.timeline({

            })

            tl.to('#cbd', { y: '-80vh', ease: "power1", opacity: 1, duration: 1 }, 0)

        }, 0);


    }


    return (
        <div ref={RefCbd2} className="h-windows w-full ">



        </div>
    )
}

export default CbdScreen2