import { useState } from "react"
import "./refe.scss"
import { ArrowLeft, ArrowLeftMobile, ArrowRight, ArrowRightMobile, img1, img2, img3 } from "../imports"
import SliderButton from "../../sliderbutton/SliderButton";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "1.25rem 0 1.25rem 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = ({ currentIndex, slideIndex }) => ({
  margin: "0 13px",
  cursor: "pointer",
  fontSize: "2rem",
  justifyContent: "center",
  color: currentIndex === slideIndex ? "Lighblue" : "#000",
});

const Refe = () => {

  const slides = [
    { imagePath: img1, title: "Kuva 1"},
    { imagePath: img2, title: "Kuva 2"},
    { imagePath: img3, title: "Kuva 3"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].imagePath})`,
  };

  return (
    <section className="refe" id="refe">
        <div className="wrapper">
          <div className="refeContainerTitles">
            <h2 className="refeContainerTitles-title">Kuvia töistämme</h2>
            <p className="refeContainerTitles-para">
              Olemme tehneet monenlaisia töitä Pirkanmaan alueella. Tutustu kuvagalleriassa aiemmin toteuttamiimme työprojekteihin.
              Me huolehdimme siitä, että olet täysin tyytyväinen lopputulokseemme.
            </p>
          </div>
           <div className="sliderContainer" id="fullScreen">
            <div className="slider">
              <div className="sliderBack" onClick={goToPrevious}>
                 <picture>
                  <source media="(max-width: 550px)" srcSet={ArrowLeftMobile} />
                  <source media="(min-width: 600px)" srcSet={ArrowLeft} />
                  <img src={ArrowLeft} alt="Nuoli vasempaan" />
                 </picture>
              </div>
              <div className="sliderNext" onClick={goToNext}>
                 <picture>
                  <source media="(max-width: 550px)" srcSet={ArrowRightMobile} />
                  <source media="(min-width: 600px)" srcSet={ArrowRight} />
                  <img src={ArrowRight} alt="Nuoli oikeaan" />
                 </picture>
              </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
              {slides.map((slide, slideIndex) => {
                <div style={dotStyle({currentIndex, slideIndex})} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                  *****
                </div>
              })}
            </div>
            <div className="sliderFullScreen">
              <SliderButton />
            </div>
           </div>
           <div className="sliderContainerBottom">
            <h1>Slider</h1>
           </div>
        </div>
    </section>
  )
}

export default Refe
