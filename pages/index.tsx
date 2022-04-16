import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
// import About from "../components/about/about";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Portfolio from "../components/portfolio/Portfolio";

const Home: NextPage = () => {
  return (
    <main className="font-montserrat w-screen max-w-[2040px] m-auto ">
      <div className="h-[900px] flex flex-col justify-center w-full m-auto bg-[#F9F9FA] ">
        <Nav />
        <Hero />
      </div>
      <div className="h-[1000px] flex flex-col justify-center">
        <About />
      </div>
      <div className="h-[1000px] flex flex-col justify-center">
        <Portfolio />
      </div>
    </main>
  );
};

export default Home;
