import "./hero.scss"


const Hero = () => {


  return (
   <section className="hero" id="hero">
     <div className="wrapper">
      <div className="heroContainer">
        <div className="heroContainer-box">
          <h5 className="heroContainer-box-subtitle">HP-Pinnat OY</h5>
          <h1 className="heroContainer-box-title">Maalaus- ja pinnoitustyöt Pirkanmaalla</h1>
          <p className="heroContainer-box-text">
            Tervetuloa luotettavan ja ammattitaitoisen rakennusmaalaus ja pinnoitustyö yrityksen pariin. Olemme erikoistuneet tarjoamaan kattavia maalaus- ja pinnoitusratkaisuja sekä yksityis- että yritysasiakkaille. 
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
