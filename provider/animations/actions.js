import { gsap } from "gsap";
import { Tween, Timeline, } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const animation = () => {

    const tl = gsap.timeline({

    })
    tl.to('#imagen', { y: '-10vh', ease: "power1", duration: 1 }, 0)
        .to('#imagen2', { y: '-10vh', ease: "power1", delay: 0.3, duration: 1 }, 0)


}