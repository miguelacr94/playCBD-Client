import React, { useEffect, useState } from "react";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { drops } from "../../../utils/data";
import ImgBanner from "../ImgBanner";



export default function Banner() {

  const [clop, setClops] = useState();
  const [containerClop, setContainerClops] = useState();

  useEffect(() => {
    const clops = document.querySelectorAll('#clops');
    const containerClops = document.querySelector('#containerClops');
    const constainerGeneral = document.querySelector('#container_General');




    // gsap.to(
    //   constainerGeneral, {
    //   // xPercent: -100 * (clops.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     // trigger: constainerGeneral,
    //     // pin: true,
    //     scrub: true,
    //     duration: 1,
    //     // snap: 1 / (clops.length - 1),
    //     end: () => "+=" + containerClops.offsetWidth * 2,
    //   }
    // });



    gsap.to(
      clops, {
      xPercent: -100 * (clops.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerClops,
        pin: true,
        scrub: true,
        duration: 1,
        snap: 1 / (clops.length - 1),
        end: () => "+=" + containerClops.offsetWidth,
      }
    });



    gsap.to(
      '#imgBanner', {
      xPercent: -20 * (clops.length - 1),
      duration: 3,
      delay: 3,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        end: () => "+=" + (containerClops.offsetWidth / 5) * 5,
      }
    });

    // gsap.to(
    //   constainerGeneral, {
    //   opacity: 0,
    //   duration: 6,
    //   delay: 2, 
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: constainerGeneral,
    //     scrub: true,
    //     // pin: true,
    //     end: () => "+=" + (containerClops.offsetWidth / 5) * 5,
    //   }
    // });



    // gsap.to('#item1', {
    //   xPercent: -1000,
    //   duration: 12,
    //   scrollTrigger: {
    //     trigger: '#item1',
    //     scrub: true,
    //     start: () => "+=" + containerClops.offsetWidth,
    //     // end: () => "+=" + containerClops.offsetWidth * 2,
    //     markers: true,
    //     pin: true,
    //   }

    // })





  });



  return (

    <div className="container_General overflow-hidden " >
      <div id="containerClops" className=" h- ">
        <div id="imgBanner" className=" w-full h-windows absolute flex">
          <div className="w-banner degrade ">
            <img
              src="./banner.svg"
              className=" h-windows relative bg-white"
            />
          </div>
          <div className="w-100  ">
            <div className=" w-115 h-windows -ml-fondo ">
            </div>
          </div>
        </div>

        <section id="clops" className="">
        </section>
        {
          drops && drops.map((drop, index) => {
            return (
              <section key={index} id="clops" className="">
                <img
                  id={drop.id}
                  src={drop.image}
                  className="w-30 h-80"
                />
              </section>
            )
          })
        }

        <section id="clops" className="w-full  relative"  >
          <div id="contenedorItem">
            <div id="item1 " className="h-windows flex justify-center items-center flex-col">
             <img 
              src='./image/cuidados.svg'
             />
              <img 
              src='./image/para.svg'
             />
              <img 
              src='./image/lapiel.svg'
             />
            </div>


          </div>
          
        </section>

      </div>




      <div className="h-windows w-100">

        <div className="h-64 ">dsddsd</div>
        <div className="h-64 ">dsddsd</div>
      </div>


    </div>



  )
}







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




    // // function tweenComplete() {
    // //   setSection(!section);
    // // }

    // const tl = gsap.timeline({

    //   scrollTrigger: {
    //     trigger: containergeneral,
    //     scrub: 2,
    //     duration: 1,
    //     start: () => "+=" + (containerSection.offsetWidth / sections.length) * 1,
    //     end: () => "+=" + (containerSection.offsetWidth / sections.length) * 5,
    //     pin: true
    //   }
    // });
    // tl.to(banner, { x: '-100%', duration: 2 })




    gsap.to(
      banner, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        scrub: 2,
        duration: 1,
        start: () => "+=" + (containerSection.offsetWidth / sections.length) * 1,
        end: () => "+=" + (containerSection.offsetWidth / sections.length) * 5,

      }
    });

//     gsap.to("#section-14-1219", {
//       backgroundPosition: "100% 65%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#section-14-1219",
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 0.5
//       }
// });



    gsap.to(
      fondo, {
      xPercent: -110,
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        duration: 0,
        start: () => "+=" + (containerSection.offsetWidth / sections.length) * 3,
        end: () => "+=" + (containerSection.offsetWidth / sections.length) * 3.1,

      }
    });


    gsap.to(
      containerSection2, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        duration: 4,
        start: () => "+=" + (containerSection.offsetWidth / sections.length) * 1,
        // end: () => "+=" + (containergeneral.clientHeight),
        snap: 0.1 / 5,
        markers:true,
      }
    });



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner,

        end: () => "+=" + (containerSection.offsetWidth / sections.length) * 5,

        scrub: 1,
        pin: true
      }
    });

    // gsap.utils.toArray("#banner").forEach(layer => {
    //   const depth = layer.dataset.depth;
    //   const movement = (layer.offsetHeight * depth)
    //   tl.to(layer, { x: -movement, ease: "none" }, 0)
    // });


    // console.log(banner.offsetHeight)

  });



  return (




    <>
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

    </>

  )
}