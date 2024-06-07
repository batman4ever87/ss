import "./hero.scss"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: {ease: "bounce.in"}})

    tl.fromTo(".heroNeutral", {xPercent: -50}, {xPercent: 0})
    tl.fromTo(".heroStroke", {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1})
    tl.fromTo(".heroGreen", {xPercent: -50, opacity: 0}, {xPercent: 0, opacity: 1})
    tl.fromTo(".heroPara", {xPercent: 0, opacity: 0}, {xPercent: 0, opacity: 1})
  }, {scope: container})

  return (
    <div className="wrapper">
        <section className="hero" id="hero" ref={container}>
            <h1 className="heroNeutral">SOLKI<span className="heroStroke">KADUN</span></h1>
            <h1 className="heroGreen">
            SCHALKE
            <span className="heroPara">kännissä mutta <span className="heroGreen">tosissaan</span></span>
            </h1>
        </section>
    </div>
  )
}

export default Hero
