import React, { useEffect } from 'react';
import { Tween, Timeline, } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const Separator = ({ Ref, image1, image2, image3 }) => {


    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === Ref.current) {
                    if (entry.isIntersecting) {

                        animationDown();
                    } else {

                        // animation2();

                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(Ref.current);
    }, [Ref]);




    const animationDown = () => {
        setTimeout(() => {
            const tl = gsap.timeline({

            })
            tl.to(`#${image1}`, { opacity: 0, y: '100vh', ease: "power", duration: 3 }, 0)
                .to(`#${image2}`, { opacity: 0, y: '100vh', ease: "power1", delay: 0.3, duration: 3 }, 0)
                .to(`#${image3}`, { opacity: 0, y: '100vh', ease: "power1", delay: 0.5, duration: 3 }, 0)

        }, 0);

    }



    return (
        <div ref={Ref} className="w-full h-8  absolute  bg-grey">-</div>
    )
}

export default Separator