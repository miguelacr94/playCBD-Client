/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react";
import Link from "next/link";
import { Menu, MenuItem, MenuHeader, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import { dashboardNavLinks } from "@/utils/routes";
import { Routes } from "@/utils/routes";
import { logout } from "provider/user/actions";
import Icons from "@/utils/icons";

import { Context } from "provider/user/context";
import { ContextCart } from "provider/cart/context";
import { useEffect } from "react";
import { countCartItem } from "provider/cart/actions";

export default function DashboardNavbar() {
  const { user } = useContext(Context);
  const { cart } = useContext(ContextCart);
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => setShowNav(!showNav);



  useEffect(() => {
    countCartItem()
  }, [cart])


  return (
    <>
      <nav className="relative flex items-center justify-between w-screen h-20 bg-white from-primary to-black md:mb-0 md:px-10">
        <div className="justify-between hidden w-full md:flex">
          <div className="flex items-center justify-start text-black">
            <button className="mr-5 lg:hidden text-black bg-white" onClick={handleNav}>
              {Icons.menu}
            </button>
            <Link href="/panel" passHref>
              {/* <img
                src="/vercel.svg"
                alt="logo"
                className="object-contain w-20 cursor-pointer"
              /> */}
              <h1 className="text-2xl font-bold  cursor-pointer">
                Quantium Tech
              </h1>
            </Link>
            <ul className="hidden ml-5 lg:flex">
              {dashboardNavLinks

                .slice(1, dashboardNavLinks.length)
                .map((link, index) => {
                  // if(link.name !=='home'){
                  return (
                    <li key={index} className="px-5 text-white" >
                      <Link href={link.path}>{link.name}</Link>
                    </li>

                  );
                  // }
                })}
            </ul>
          </div>
          <div className="flex justify-end text-black">
            <Link href={Routes.cart} passHref>
              <button className="flex items-center mx-5 cart">
                {Icons.cart}
                <p className="w-4 h-4 rounded-full bg-red-400 text-white flex items-center justify-center absolute ml-4 -mt-4 text-car">
                  {countCartItem()}
                </p>
              </button>

            </Link>
            <UserMenu user={user} />
          </div>
        </div>
        <div className="flex items-center justify-between w-screen px-5 flex-nowrap md:hidden">
          <button onClick={handleNav}>{Icons.menu}</button>
          <Link href="/" passHref>
            <h1 className="mr-8 text-2xl font-bold text-black cursor-pointer">
              Quantium Tech
            </h1>
          </Link>
          <UserMenu user={user} />
        </div>
      </nav>
      <div
        className={`lg:hidden w-full h-full md:w-80 p-20 bg-black flex flex-col fixed z-50 top-0 duration-300 ${showNav ? "left-0" : "-left-full md:-left-80"
          }`}
      >
        {showNav && (
          <>
            <div className="absolute top-5 right-5">
              <button className="flex items-center" onClick={handleNav}>
                {Icons.close}
              </button>
            </div>
            <div className="flex justify-center">
              <Link href="/" passHref>
                <img
                  className="object-contain w-40 h-full md:w-60"
                  src="/logo_white.png"
                  alt="blockchain-logo"
                />
              </Link>
            </div>
            <ul className="flex flex-col items-center justify-center mt-10 text-white">
              {dashboardNavLinks.map((link, index) => {
                return (
                  <li key={index} className="px-5 py-2 my-1 text-2xl">
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

function UserMenu() {
  const { user, setUser } = useContext(Context);
  const logoutUser = () => {
    logout();
    setUser(null);
    location.replace(Routes.home);
  };

  return (
    <Menu
      menuButton={
        <div className="absolute flex items-center justify-end right-5 md:relative md:right-0">
          <img
            className="rounded-full cursor-pointer h-9 w-9"
            src={`${user.image}?time=${Date.now()}` || "/default-avatar.png"}
            alt="profile-image"
          />
        </div>
      }
    >
      <MenuHeader>
        <div className="flex items-center justify-start w-full">
          <img
            className="rounded-full h-9 w-9"
            src={`${user.image}?time=${Date.now()}` || "/default-avatar.png"}
            alt="profile-pic"
          />
          <span className="ml-2">{user.fullName}</span>
        </div>
      </MenuHeader>
      <MenuDivider />
      <MenuItem>
        <Link href={Routes.profile}>Mi perfil</Link>
      </MenuItem>
      <MenuItem>
        <Link href={`${Routes.profile}?tab=entrenamientos`}>
          Mis entrenamientos
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href={`${Routes.profile}?tab=cursos`}>Mis cursos</Link>
      </MenuItem>
      <MenuItem>
        <Link href={`${Routes.profile}?tab=certificados`}>
          Mis certificados
        </Link>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <button
          onClick={logoutUser}
          id="google-login"
          className="w-full text-left text-primary"
        >
          <span className="ml-3">Cerrar sesión</span>
        </button>
      </MenuItem>
    </Menu>
  );
}
