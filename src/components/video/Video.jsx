import "./video.scss"
import video from "../../assets/vid/video.mp4"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Video = () => {
    useGSAP(() => {
        gsap.fromTo(".heroVid", {scale: 0.1}, {scale: 1, scrollTrigger: {
            trigger: ".hero",
            start: "top center",
            end: "bottom center",
            scrub: true,
        }})
    }, [])
    
  return (
    <div className="wrapper">
     <div className="heroVideo">
        <div className="overlay">
            <video src={video} autoPlay muted loop  className="heroVid"></video>
        </div>
     </div>
    </div>
   
  )
}

export default Video
