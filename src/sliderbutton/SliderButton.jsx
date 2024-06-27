import "./sliderbutton.scss"
import "../components/imports"

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
      <picture className="expand" onClick={toggleFullScreen}>
        ✜
      </picture>
    </div>
  )
}

export default SliderButton
