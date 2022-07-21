import React, { useEffect, useRef, useState } from "react";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { drops } from "../../../utils/data";
import ImgBanner from "../ImgBanner";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scene2 from "./Scenes/Scene2";
import Separator from "../../Separator";
import CbdContainer from "../../Cbd/CbdContainer";


export default function Banner() {

  const [section, setSection] = useState(false);
  const [usebanner, setBanner] = useState(0);



  const handleScroll = () => setBanner(window.pageYOffset);
  const RefSeparator0 = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     var position = window.pageYOffset || document.documentElement.scrollTop;
  //     var element = document.getElementById('banner');
  //     element.style.left = position * -0.5 + 'px';
  //   }


  // })
  // console.log(usebanner)


  useEffect(() => {


    const fondo = document.querySelector('#fondo')
    const banner = document.querySelector('#banner')
    const containerSection = document.querySelector('#containerSection');
    const containerSection2 = document.querySelector('#containerSection2');
    const containergeneral = document.querySelector('#container_General');
    const sections = document.querySelectorAll('#sections');



    gsap.to(
      sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerSection,
        pin: true,
        scrub: 1,
        duration: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerSection.offsetWidth,
      }
    });




    const tlBn = gsap.timeline({
      scrollTrigger: {
        trigger: banner,
        start: () => `${sections[0].clientWidth * 1}px`,
        end: () => `${sections[0].clientWidth * 5}px`,
        scrub: 1,
        duration: 2,

      }
    });
    tlBn.to(banner, { x: '-100%', ease: "none" }, 0)



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fondo,
        start: () => `${sections[0].clientWidth * 3.2}px`,
        end: () => `${sections[0].clientWidth * 6}px`,
        scrub: 1,
        duration: 2,

      }
    });
    tl.to(fondo, { x: '-110%', ease: "none" }, 0)


  });

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const slides = [...document.querySelectorAll(".slide")];

    ScrollTrigger.create({

      trigger: ".slides",
      scrollTrigger: {
        scrub: 1,
      },
      snap: {
        snapTo: 1 / (slides.length + 1),
        duration: 1.5,
        ease: "power2.inOut"
      }
    });
  });


  useEffect(() => {
    const slide = document.querySelectorAll('.slide');
    const tlBn = gsap.timeline({
      scrollTrigger: {
        trigger: '.slides',
        start: () => `${slide[0].clientHeight * 2}px`,
        end: () => `${slide[0].clientHeight * 3}px`,
        scrub: true,
        duration: 2,
        markers: true,

      }
    });
    tlBn.to('#fondo', { y: '-100vh', ease: "none" }, 0)


  })

  useEffect(() => {
    const slide = document.querySelectorAll('.slide');
    const tlBn = gsap.timeline({
      scrollTrigger: {
        trigger: '.slides',
        start: () => `${slide[0].clientHeight * 1}px`,
        end: () => `${slide[0].clientHeight * 2}px`,
        scrub: true,
        duration: 2,
        markers: true,

      }
    });
    tlBn.to('#fondoColor', { opacity: 1, ease: "none" }, 0)


  })
  useEffect(() => {
    const slide = document.querySelectorAll('.slide');
    const tlBn = gsap.timeline({
      scrollTrigger: {
        trigger: '.slides',
        start: () => `${slide[0].clientHeight * 3}px`,
        end: () => `${slide[0].clientHeight * 4}px`,
        scrub: true,
        duration: 2,
        markers: true,

      }
    });
    tlBn.to('#fondoColor', { y: '-100vh', opacity: 0, ease: "none" }, 0)


  })




  return (

    <>
      <div id="container_General" className="container_General  relative" >
        <div id="fondoColor" className="w-100 fixed  -z-10 opacity-0">
          <div className=" w-full h-windows fondoColor  " />
        </div>
        <div id="fondo" className="w-100 fixed ml-100 -z-10">
          <div className=" w-115 h-windows fondo -ml-fondo " />
        </div>

        <div id="banner" className="layer w-banner fixed -z-10 flex bg-grey " data-depth='5.5'>
          <img src="./banner.svg" className="ml-product h-windows w-banner " />
        </div>

        <div id="" className="w-100 fixed -z-10 flex justify-center items-end text-end h-windows">
          <h2 id="cbd" className="-mb-cbd opacity-0">¿QUÉ ES EL CBD?</h2>
        </div>


        <div id="containerSection" className="">

          <section id="sections" className="flex justify-center items-center h-windows" />
          {
            drops && drops.map((drop, index) => {
              return (
                <section key={index} id="sections" className="flex justify-center items-center">
                  <img
                    id={drop.id}
                    src={drop.image}
                    className="w-30 h-80"
                  />
                </section>
              )
            })
          }
          <section id="sections" className="h-windows" >5</section>
          <section id="sections" className="h-windows flex justify-center items-center"  >


            <Separator
              Ref={RefSeparator0}
              image1="img1S1"
              image2="img2S1"
              image3="img3S1"
            />

          </section>

        </div>
        <Scene2 />

      </div>


    </>




  )
}