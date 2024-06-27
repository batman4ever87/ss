import "./sliderbutton.scss"
import "../components/imports"
import { ExpandIcon, ExpandIconMobile } from "../components/imports";

const SliderButton = () => {
    const toggleFullScreen = () => {
        const element = document.getElementById("fullScreen");

        const isFullScreen = document.fullscreenElement;

        if(isFullScreen) {
           document.exitFullscreen();
        } else {
            element.requestFullscreen();
        }
    };

  return (
    <div className="button-container" id="button-container">
      <picture onClick={toggleFullScreen}>
        <source media="(max-width: 550px)" srcSet={ExpandIconMobile} />
        <source media="(min-width: 600px)" srcSet={ExpandIcon} />
        <img src={ExpandIcon} alt="Laajenna kuvaa" />
      </picture>
    </div>
  )
}

export default SliderButton
