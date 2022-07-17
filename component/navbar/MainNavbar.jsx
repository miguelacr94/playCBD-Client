/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { publicNavLinks, Routes } from "../../utils/routes";
import Icons from "../../utils/icons";
import Cart from "../cart/Cart";
import HamburguerMenu from "./menu/HamburguerMenu";
// import { Modal } from "react-responsive-modal";
// import { Menu, MenuItem } from "@szhsin/react-menu";
// import Icons from "@/utils/icons";
// import SignUpModal from "@/components/modals/SignUpModal";

export default function MainNavbar() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuCart, setShowMenuCart] = useState(false);
  // let menu = useRef(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpModal = (state) => setShowSignUpModal(state);
  const handleShowMenuCart = (state) => setShowMenuCart(state);
  const handleShowMenu = (state) => setShowMenu(state);

 

  return (

    <>
      <nav className="fixed flex items-center justify-center w-full h-8 px-4 py-8 bg-whiteOpacity from-black md:px-10 z-20 top-0">
        <div className="flex flex-col sm:flex-row justify-center sm:w-4/6 w-full">
          <div className="sm:w-1/3 w-full flex justify-end sm:hidden block">
            <Nav
              showMenuCart={(state) => handleShowMenuCart(state)}
              showMenu={(state) => handleShowMenu(state)}
            />
          </div>
          <div className="hidden sm:block sm:w-1/3">

          </div>

          <div className="flex justify-center items-center sm:w-1/3 w-full">
            <Link href="/" passHref>
              <img
                className="object-contain w-8 h-8 m-px "
                src="/logoBlack.png"
                alt="playCBD-logo"
              />
            </Link>
            <Link href="/" passHref>
              <div className="mt-1 flex flex-col justify-center items-center">
                <span className="m-px text-black font-light ">PLAY</span>
                <p className={ `  ${router.route === '/' ? 'border-greenLigth': 'border-transparent'} w-4 border-b-2 `}></p>
              </div>

            </Link>
            <Link href="/cbd" passHref>
              <div className="mt-1 flex flex-col justify-center items-center mx-0.5">
                <span className="m-px text-black ">CBD</span>
                <p className={ `  ${router.route === '/cbd' ? 'border-KingBlue': 'border-transparent'} w-4 border-b-2 `}></p>
              </div>
            </Link>
            <Link href="/power" passHref>
              <div className="mt-1 flex flex-col justify-center items-center">
                <span className="m-px text-black font-bold ">POWER</span>
                <p className={`w-4 border-b-2 ${router.route==="/power" ? 'border-redLine' : 'border-transparent'}`}></p>
              </div>
            </Link>
          </div>
          <div className="sm:block hidden justify-end w-1/3 ">
            <Nav
              showMenuCart={(state) => handleShowMenuCart(state)}
              showMenu={(state) => handleShowMenu(state)}
            />
          </div>
        </div>
      </nav>


      <div className={`bg-grey-cart sm:mt-10 md:mt-16 mt-10 right-0 fixed transition-right duration-1000 ease-in-out z-20 w-5/6
      ${showMenuCart ? 'mr-0' : '-mr-menu '}
      `}>
        <Cart />
      </div>

      <div className={`bg-grey-cart md:mt-16 mt-10 right-0 fixed transition-right duration-1000 ease-in-out z-20 w-full
      ${showMenu ? 'mr-0' : '-mr-menu '}
      `}>
        <HamburguerMenu />
      </div>
    </>
  );




}

export const Nav = ({ showMenuCart, showMenu }) => {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleNav = () => {

    if (menu === true) {
      setMenu(false);
      showMenu(false);
    }

    setCart(!cart);
    showMenuCart(!cart);

  }

  const handleNavMenu = () => {
    if (cart === true) {
      setCart(false);
      showMenuCart(false);
    }
    setMenu(!menu);
    showMenu(!menu);
  }



  return (
    <div className=" flex  justify-end">

      {menu ?
        <button className="flex text-black m-2 text-2xl" onClick={handleNavMenu}>
          {Icons.close2}
        </button>
        :
        <button className="flex text-black m-2" onClick={handleNavMenu}>
          {Icons.menu}
        </button>
      }

      {cart ?
        <button className="flex text-black m-2 text-2xl" onClick={handleNav}>
          {Icons.close2}
        </button>
        :
        <button className="flex text-black m-2 " onClick={handleNav}>
          {Icons.cart}
        </button>
      }

      <button className="flex text-black m-2 hidden sm:block" onClick={handleNav}>
        {Icons.menu}
      </button>
    </div>
  )

}