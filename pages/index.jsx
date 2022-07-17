
import { Tween, Timeline } from "react-gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Banner from "../component/index/banner/Banner";
import Scene2 from "../component/index/banner/Scenes/Scene2";


export default function Home() {

  return (
    <>
      {/* <div className="w-100 fixed ">
        <div className=" w-115 h-windows fondo -ml-fondo ">
        </div>
      </div> */}
      <Banner />
     
    </>

  )
}