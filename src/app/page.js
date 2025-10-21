"use client";
import { useEffect } from "react";
import useScrollAnimate from "@/hooks/useScrollAnimate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Portfolio from "@/components/Portfolio";
import Courses from "@/components/Courses";
import Blog from "@/components/Blog";
import Youtube from "@/components/Youtube";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  useScrollAnimate(); // 🪄 enables scroll animations globally

  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Featured />
        <Portfolio />
        <Courses />
        <Blog />
        <Youtube />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

