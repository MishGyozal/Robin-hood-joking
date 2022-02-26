import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/jokes"} className={"fav-jokes"}>
          Favorite Jokes
        </NavLink>
      </header>
      <div className={"container"}>
        <Outlet />
      </div>
      <footer>© MG {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
