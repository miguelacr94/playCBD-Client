/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { publicNavLinks, Routes } from "../../utils/routes";
import Icons from "../../utils/icons";
// import { Modal } from "react-responsive-modal";
// import { Menu, MenuItem } from "@szhsin/react-menu";
// import Icons from "@/utils/icons";
// import SignUpModal from "@/components/modals/SignUpModal";

export default function MainNavbar() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  // let menu = useRef(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpModal = (state) => setShowSignUpModal(state);


  return (
    <nav className="fixed flex items-center justify-center w-full h-8 px-5 py-10 bg-gradient from-black md:px-10">

      <div className="flex flex-col sm:flex-row justify-center sm:w-4/6 w-full">
        <div className="sm:w-1/3 w-full flex justify-end sm:hidden block">
          <Nav />
        </div>
        <div className="hidden sm:block sm:w-1/3">
          
        </div>

        <div className="flex justify-center items-center sm:w-1/3 w-full">
          <Link href="/" passHref>
            <img
              className="object-contain w-8 h-8 m-px "
              src="/favicon.ico"
              alt="playCBD-logo"
            />
          </Link>
          <Link href="/" passHref>
            <span className="m-px text-black">PLAY</span>
          </Link>
          <Link href="/cbd" passHref>
            <span className="m-px text-black">CBD</span>
          </Link>
          <Link href="/power" passHref>
            <span className="m-px text-black">POWERS</span>
          </Link>
        </div>
        <div className="sm:block hidden justify-end w-1/3 ">
          <Nav />
        </div>

      </div>

    </nav>
  );




}

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => setShowNav(!showNav);

  return (
    <div className=" flex  justify-end">
      <button className="flex text-black m-2" onClick={handleNav}>
        {Icons.menu}
      </button>
      <button className="flex text-black m-2" onClick={handleNav}>
        {Icons.cart}
      </button>
      <button className="flex text-black m-2 hidden sm:block" onClick={handleNav}>
        {Icons.menu2}
      </button>
    </div>
  )

}