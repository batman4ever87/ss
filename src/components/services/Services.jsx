import "./services.scss"

const Services = () => {
  return (
    <section className="services" id="services">
        <div className="wrapper">
            <div className="service-title-container">
              <h2 className="service-title-contaner-title">Erinomaista ja asiantuntevaa palvelua</h2>
              <p className="service-title-container-text">
                Haluamme varmistaa, että olet 100 % tyytyväinen maalauspalveluihimme. Siksi tarjoamme kaikille tekemillemme töille 100 % tyytyväisyystakuun. Käytämme ainoastaan korkealaatuisia materiaaleja, jotka sopivat täydellisesti käyttökohteeseesi ja noudattavat tarkasti tehtyä kustannuslaskelmaa.      
              </p>
            </div>
            <div className="serviceCards">
              <div className="serviceCards-card">
                <h3 className="serviceCards-card-number">01</h3>
                <h3 className="serviceCards-card-title">Maalaustyöt</h3>
                <p className="serviceCards-card-text">
                  Erilaiset maalaustyöt sisällä ja ulkona.
                </p>
              </div>
              <div className="serviceCards-card">
                <h3 className="serviceCards-card-number">02</h3>
                <h3 className="serviceCards-card-title">Pinnoitustyöt</h3>
                <p className="serviceCards-card-text">
                  Laasti- ja tasoitetyöt sekä erilaiset pinnoitustyöt terassin öljyämisestä mikrosementointiin.
                </p>
              </div>
              <div className="serviceCards-card">
                <h3 className="serviceCards-card-number">03</h3>
                <h3 className="serviceCards-card-title">Huoneistoremontit</h3>
                <p className="serviceCards-card-text">
                  Asuntojen paikkaukset, maalaukset, tapetoinnit, lattian vaihdot ja listotukset.
                </p>
              </div>
              <div className="serviceCards-card">
                <h3 className="serviceCards-card-number">04</h3>
                <h3 className="serviceCards-card-title">Muut palvelut</h3>
                <p className="serviceCards-card-text">
                 Kaikenlaiset apupalvelut rakennusliikkeille, taloyhtiöille sekä kotitalouksille
                </p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services
