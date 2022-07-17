import React, { useEffect, useState } from "react";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { drops } from "../../../utils/data";
import ImgBanner from "../ImgBanner";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scene2 from "./Scenes/Scene2";


export default function Banner() {

  const [section, setSection] = useState(false);
  const [usebanner, setBanner] = useState(0);



  const handleScroll = () => setBanner(window.pageYOffset);


  useEffect(() => {
    window.onscroll = function () {
      var position = window.pageYOffset || document.documentElement.scrollTop;
      var element = document.getElementById('banner');
      element.style.left = position * -0.5 + 'px';
    }


  })
  console.log(usebanner)


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





    // gsap.to(
    //   banner, {
    //   xPercent: -200,
    //   ease: "none",
    //   scrollTrigger: {

    //     scrub: 2,
    //     duration: 1,
    //     start: () => "+=" + (containerSection.offsetWidth / sections.length) * 1,
    //     end: () => "+=" + (containerSection.offsetWidth / sections.length) * 3,
    //     markers: true,
    //     scrub: 0.5
    //   }
    // });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: banner,

    //     end: () => "+=" + (containerSection.offsetWidth / sections.length) * 5,

    //     scrub: 1,
    //     pin: true
    //   }
    // });

    // gsap.utils.toArray("#banner").forEach(layer => {
    //   const depth = layer.dataset.depth;
    //   const movement = (layer.offsetHeight * depth)
    //   tl.to(layer, { x: -movement, ease: "none" }, 0)
    // });







    // gsap.to(
    //   fondo, {
    //   xPercent: -110 + '%',
    //   ease: "none",
    //   scrollTrigger: {
    //     scrub: 1,
    //     duration: 0,
    //     start: () => "+=" + (containerSection.offsetWidth / sections.length) * 4,
    //     end: () => "+=" + (containerSection.offsetWidth / sections.length) * 3,
    //     markers: true,

    //   }
    // });

   


    console.log(sections[0].clientWidth * 3)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fondo,
        start:()=> `${sections[0].clientWidth * 3.2}px`,
        end:()=> `${sections[0].clientWidth * 6}px`,
        // end: () => "+=" + (containerSection.offsetWidth / sections.length) * 6,

        scrub: 1,
        // pin: true,
        duration: 2,
        markers: true,
      }
    });


    tl.to(fondo, { x: '-110%', ease: "none" }, 0)




    gsap.to(
      containerSection2, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        duration: 4,
        start: () => "+=" + (containerSection.offsetWidth / sections.length) * 6,
        // end: () => "+=" + (containergeneral.clientHeight),
        snap: 0.1 / 5
      }
    });





  });



  return (

    <div id="container_General" className="container_General  relative" >

      <div id="fondo" className="w-100 fixed ml-100 -z-10">
        <div className=" w-115 h-windows fondo -ml-fondo " />
      </div>
      <div id="banner" className="layer w-banner fixed -z-10 flex " data-depth='5.5'>
        <img src="./banner.svg" className="ml-product h-windows  " />
      </div>


      <div id="containerSection" className="">

        <section id="sections" className="" />
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
        <section id="sections" className="" >5</section>
        <section id="sections" className=""  >
          6
        </section>
      </div>
      <div id="containerSection2" className="">
        <Scene2
          section={section}

        />
      </div>
    </div>



  )
}