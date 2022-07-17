import React, { useEffect } from 'react';
import { Tween, Timeline, } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const Separator = ({ Ref, image1, image2, image3 }) => {



    console.log(Ref);
    console.log(image1.id);
    console.log(image2);

    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === Ref.current) {
                    if (entry.isIntersecting) {
                        console.log('view');
                        animationDown();
                    } else {
                        console.log('noview')
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
            tl.to(`#${image1}`, { y: '20vh', ease: "power", duration: 1 }, 0)
                .to(`#${image2}`, { y: '20vh', ease: "power1", delay: 0.3, duration: 1 }, 0)

        }, 0);

    }



    return (
        <div ref={Ref} className="w-full h-8 bg-grey absolute">--</div>
    )
}

export default Separator