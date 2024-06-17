import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <section className="main">
        <NavBar />
        <Outlet/>
        <Footer/>
      </section>
    </>
  );
};

export default Main;
