import "./about.scss"
import { Pauli, Henri, Phone, Email } from "../imports"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrapper">
       <div className="aboutTitles">
        <h2 className="aboutTitles-title">Keitä me olemme</h2>
        <p className="aboutTitles-para">
          Olemme molemmat kokeneita ja arvostettuja maalareita, ja meillä  on laaja osaaminen ja monipuolinen kokemus. Meidän ammattitaitomme, huolellisuutemme ja asiakaslähtöisyytemme tekevät meistä erinomaisia valintoja erilaisiin maalausprojekteihin.
        </p>
       </div>
       <div className="aboutCards">
        <div className="aboutCards-card">
          <div className="aboutCards-card-img">
            <picture>
              <img src={Pauli} width={305} height={304} alt="Kuva Pauli Niemestä" />
            </picture>
          </div>
          <div className="aboutCards-card-textContent">
            <div className="aboutCards-card-textContent-titles">
              <h3 className="aboutCards-card-textContent-title">Pauli Niemi</h3>
              <p className="aboutCards-card-textContent-subtitle">Varatoiminen toimitusjohtaja</p>
              <p className="aboutCards-card-textContent-para">
                Olen  toiminut ammattimaisena maalarina yli 20 vuotta. Olen erikoistunut sekä sisä- että ulkomaalaukseen sekä olen suorittanut lukuisia suuria ja pieniä projekteja ympäri Suomen. 
              </p>
            </div>
            <div className="aboutCards-card-textContent-bottom">
              <div className="aboutCards-card-textContent-bottom-email">
                <picture>
                  <img src={Email} alt="sähköpostin iconi" />
                </picture>
                <p><a href="mailto:pauli@hppinnat.fi">Pauli@hppinnat.fi</a></p>
              </div>
              <div className="aboutCards-card-textContent-bottom-phone">
                <picture>
                  <img src={Phone} alt="puhelimesn iconi" />
                </picture>
                <p>+358 40 72888009</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutCards-card">
          <div className="aboutCards-card-img">
            <picture>
              <img src={Henri} width={305} height={304} alt="Kuva Henri Jokisesta" />
            </picture>
          </div>
          <div className="aboutCards-card-textContent">
            <div className="aboutCards-card-textContent-titles">
              <h3 className="aboutCards-card-textContent-title">Henri Jokinen</h3>
              <p className="aboutCards-card-textContent-subtitle">Hankintapäällikkö</p>
              <p className="aboutCards-card-textContent-para">
                Terve! minä olen työskennellyt maalausalalla yli 15 vuotta. Olen myös  suorittanut maalarin ammattitutkinnon ja osallistunut useisiin jatkokoulutuksiin. Minulta löytyy kokemusta sekä kaupallisista että yksityisistä projekteista, Kollegani ovet kuvailleet minua luotettavaksi ja ammattitaitoiseksi.
              </p>
            </div>
            <div className="aboutCards-card-textContent-bottom">
              <div className="aboutCards-card-textContent-bottom-email">
                <picture>
                  <img src={Email} alt="sähköpostin iconi" />
                </picture>
                <p><a href="mailto:henri@hppinnat.fi">Henri@hppinnat.fi</a></p>
              </div>
              <div className="aboutCards-card-textContent-bottom-phone">
                <picture>
                  <img src={Phone} alt="puhelimesn iconi" />
                </picture>
                <p>+358 50 3495775</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default About
