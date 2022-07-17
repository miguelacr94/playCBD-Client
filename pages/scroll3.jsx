import Amount from "../component/Amount";
import Drops from "../component/Drops";
import Cosmetic from "../component/cosmetic/Cosmetic";
import MainNavbar from "../component/navbar/MainNavbar";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { gsap } from "gsap";
import { product, products } from "../utils/data";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { calculeYResponsive } from "../provider/parallax/actions";




export default function Home() {
  const [items, setItems] = useState(0);



  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("section");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
        snap: 1/(sections.length - 1)
      }
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" }
      });
    });


  }, [])




  return (
    <>

      <div class="wrapper flex flex-nowrap">
        <section class="section section--large flex-shrink-0  h-windows flex justify-center items-center">
          Part One
        </section>
        <section class="section section--dark section--large h-windows flex-shrink-0 d-flex justify-center items-center">
          Part Two
        </section>
        <section class="section section--large  h-windows flex-shrink-0 flex justify-center items-center">
          Part Three
        </section>
        <section class="section section--large flex-shrink-0 h-windows flex justify-center items-center">
          Part Four
        </section>
      </div>

      <div class="center-marker"></div>


    </>


  )
}


<div className="container_General  " >
<div id="containerClops" className="bg-white absolute ">
  <div className="absolute overflow-hidden  w-full h-windows">
    <img
      id="imgBanner"
      src='./banner.svg'
      className="relative"
    />
  </div>
  <section id="clops" className="w-windows">
  </section>
  <section id="clops" className="w-windows">
    <div className="flex w-100 h-windows justify-center items-center">
      <img
        id="#gota1"
        src="./gota1.png"
        className="w-30 h-80"
      />
    </div>

  </section>
  <section id="clops" className="w-windows">
    <div className="flex w-100 h-windows justify-center items-center">
      <img
        id="#gota2"
        src="./gota2.png"
        className="w-30 h-80"
      />
    </div>

  </section>
  <section id="clops" className="w-windows">
    <div className="flex w-100 h-windows justify-center items-center">
      <img
        id="#gota3"
        src="./gota3.png"
        className="w-30 h-80"
      />
    </div>

  </section>
  <section id="clops" className="  "  >
    <div className="flex w-100 h-windows justify-center items-center bg-blue-400">
      <h2>Hola mundo</h2>
    </div>
    <div className="flex w-100 h-windows justify-center items-center bg-blue-400">
      <h2>Hola mundo</h2>
    </div>
  </section>
</div>

<div className="contenedor_Animacion bg-grey w-full h-windows bg-red-400 mt-100 "  >
</div>
</div>






import Amount from "../component/Amount";
import Drops from "../component/Drops";
import Cosmetic from "../component/cosmetic/Cosmetic";
import MainNavbar from "../component/navbar/MainNavbar";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { gsap } from "gsap";
import { product, products } from "../utils/data";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { calculeYResponsive } from "../provider/parallax/actions";




export default function Home() {
  const [items, setItems] = useState(0);



  useEffect(() => {

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".trigger",
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=150%"
        }
      })
      .to(".box", {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 }
      })
      .to("#containerBanner", { ease: "power1.out", duration: 1, x: "-75%" }, 0)
      .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
  });


 
    
  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: true,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true,
      snap: 1 / (sections.length - 1)
    }
  });





  return (
    <>
      <section class="trigger relative">
        <div id="containerBanner" className="bg-white flex absolute">
          <div className="w-banner ">
            <img
              src="./banner.svg"
            />
          </div>
          <div className="w-100">
            <img
              src="./doradoblanco.png"
            />
          </div>


        </div>
        <div id="contenedorGotas" className="flex justify-center items-center h-windows ">
          <section id="gota1" className="gotas w-100 h-64 absolute">wwx</section>
          <section id="gota2" className="gotas w-100 h-64 absolute">1</section>
          <section id="gota3" className="gotas w-100 h-64 absolute">2</section>
          <section id="gota4" className="gotas w-100 h-64 absolute">3</section>
          <section id="gota5" className="gotas w-100 h-64 absolute">4</section>
        </div> absolute

      </section>


    </>


  )
}


 //  gsap.to('#section_1', {
    //   xPercent: 100 * (clops.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: containerClops,
    //     pin: true,
    //     scrub: 1,
    //     snap: 0.5/ (clops.length - 1),
    //     end: () => "+=" + containerClops.offsetWidth
    //   }
    // })


    



gsap.to(clops, {
  xPercent: -100 * (clops.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: containerClops,
    pin: true,
    scrub: 1,
    duration: 2,
    // snap: 1 / (clops.length - 1),
    end: () => "+=" + containerClops.offsetWidth
  }
})




import React, { useRef, useEffect, useState } from "react";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
import { gsap } from "gsap";
import { motion } from "framer-motion";
const Screen1 = ({ id }) => {

    const outerRef = useRef(null);
    const [inViewport, setInViewport] = useState(true);

    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === outerRef.current) {
                    if (entry.isIntersecting) {
                        setInViewport(true);
                        console.log('view')
                    } else {
                        setInViewport(false);
                        console.log('noview')
                    }
                }
            });

        };
        console.log('noview')
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
        observer.observe(outerRef.current);
    }, [outerRef]);

    // Framer motion animations
    const fadeInContainerWithStagger = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                type: "tween",
                ease: "easeIn",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const fadeInUp = {
        hidden: {
            opacity: 1,
            // y: 100
        },
        visible: {
            opacity: 1,
            // y: -20,
            // scale: 3,
            transition: {
                type: "spring"
            }
        }

    };




    return (





        <motion.div
            ref={outerRef}
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible" className="flex-col lg:flex-row-reverse flex justify-center items-center lg:items-start">

            <motion.div variants={fadeInUp} id="img1" className="w-60 h-44  lg:w-344 lg:h-247 flex justify-center lg:items-start bg-grey lg:mt-12">
                <img
                    src='./image/antioxidante.svg'
                    className="w-60 h-44 lg:w-344 lg:h-247"
                />
            </motion.div>


            <motion.div variants={fadeInUp} id="img2" className="flex justify-center items-start flex-col mt-10 md:mt-0 ">
                <img
                    src="./image/balsamo.png"
                    className="w-60 h-56 lg:w-400 lg:h-img m-auto"
                />
                <div className="text-center text-coffe mt-10 ">
                    <h2 className="font-bold lg:text-bold text-textR ">BÁLSAMO ANTIINFLAMATORIO</h2>
                    <p className="mt-2 text-mgR lg:text-cursive ">750mg CBD</p>
                </div>
                <button className="w-button h-10 rounded-full border-2 border-coffe text-coffe bg-transparent text-mono font-sans mt-10 m-auto">
                    conocer más
                </button>
            </motion.div>

        </motion.div>

   

    )
}

export default Screen1





//dffffff


import React, { useEffect, useState } from "react";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { drops } from "../../../utils/data";
import ImgBanner from "../ImgBanner";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scene2 from "./Scenes/Scene2";


export default function Banner() {

  const [section, setSection] = useState(false);

  useEffect(() => {

    const fondo = document.querySelector('#fondo')
    const banner = document.querySelector('#banner')
    const containerSection = document.querySelector('#containerSection');
    const containerSection2 = document.querySelector('#containerSection2');
    const containergeneral = document.querySelector('#container_General');
    const sections = document.querySelectorAll('#sections');


    // console.log(containerSection.clientWidth / sections.length)

    gsap.to(
      sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerSection,
        pin: true,
        scrub: 1,
        duration: 0,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerSection.offsetWidth,
      }
    });




    // // function tweenComplete() {
    // //   setSection(!section);
    // // }



    // gsap.to(
    //   banner, {
    //   xPercent: -(containerSection.clientWidth / sections.length),
    //   ease: "none",
    //   scrollTrigger: {
    //     scrub: 1,
    //     duration: 1,
    //     // start: () => "+=" + (containerSection.offsetWidth),
    //     end: () => "+=" + containerSection.offsetWidth,
    //     // end: () => "+=" + (containerSection.offsetWidth / sections.length) * 6,

    //   }
    // });



    // gsap.to(
    //   fondo, {
    //   xPercent: -110,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger:containergeneral,
    //     scrub: 1,
    //     duration: 0,
    //     pin: true,
    //     start: () => "+=" + (containerSection.offsetWidth / sections.length) * 4,
    //     end: () => "+=" + (containerSection.offsetWidth / sections.length) * 5,

    //   }
    // });


    // gsap.to(
    //   containerSection2, {
    //   yPercent: -10,
    //   ease: "none",
    //   scrollTrigger: {
    //     scrub: 1,
    //     duration: 4,
    //     start: () => "+=" + (containerSection.offsetWidth / sections.length) * 6,
    //     // end: () => "+=" + (containergeneral.clientHeight),
    //     snap: 0.1 / 5
    //   }
    // });



    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containergeneral,
    //     // start: "center bottom",
    //     scrub: true,
    //     // markers: true
    //     end: () => "+=" + banner.clientWidth,
    //     pin: true,
    //     // snap: 1 / (sections.length - 1),
    //   }
    // });
    // tl.to(banner, { x: '-80%', duration: 2 })




  });



  return (

    <div id="container_General" className="container_General bg-white relative" >

      {/* <div id='banner' className="w-Sfull bg-grey absolute h-windows flex">
      <img src="./banner.svg"
              className="w- h-windows relative ml-pruduct"
            />
      </div>

      <div id="fondo" className="w-100  fixed ml-100 -z-10">
        <div className=" w-115 h-windows fondo -ml-fondo " />
      </div> */}



      <div id="containerSection" className="">

        <section id="sections" className="" >ddsbdhjsbdhdsbjsbds</section>
        {
          drops && drops.map((drop, index) => {
            return (
              <section key={index} id="sections" className="">
                <img
                  id={drop.id}
                  src={drop.image}
                  className="w-30 h-80"
                />
              </section>
            )
          })
        }
        <section id="sections" className="" />
        <section id="sections" className=""  >
        </section>
      </div>
      {/* <div id="containerSection2" className="">
        <Scene2
          section={section}

        />
      </div> */}
    </div>



  )
}