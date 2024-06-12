import "./hero.scss"


const Hero = () => {


  return (
   <section className="hero" id="hero">
     <div className="wrapper">
      <div className="heroContainer">
        <div className="heroContainer-box">
          <h2 className="heroContainer-box-subtitle">HP-Pinnat OY</h2>
          <h1 className="heroContainer-box-title">Tasoitetöitä <span>ammattitaidolla</span></h1>
          <p className="heroContainer-box-text">
            Me hoidamme saneeraus- ja uudisrakennushaasteesi. Teemme työmme huolella, jotta sinulla on yksi asia vähemmän huolehdittavaa.
          </p>
          <div className="heroContainer-box-buttons">
            <button className="cta">Ota yhteyttä</button>
            <button className="cta c2">Palvelut</button>
          </div>
        </div>
      </div>
     </div>
   </section>
  )
}

export default Hero
