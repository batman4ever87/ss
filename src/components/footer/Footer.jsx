import "./footer.scss"
import { Logo } from "../imports"

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="wrapper">
            <div className="footerSection">
                <div className="footerLogo">
                    <a href="#" className="navbar-links-logo"><img src={Logo} height={60} width={203} alt="Hp-Pinnat logo" /></a>
                </div>
                <div className="footerContent">
                    <div className="footerContent-address">
                        <h5 className="footerContent-address-title">Osoite</h5>
                        <p className="footerContent-address-para">HP-Pinnat OY</p>
                        <p className="footerContent-address-para">Kulorastaantie 6b</p>
                        <p className="footerContent-address-para">36220 Kangasala</p>
                    </div>
                    <div className="footerContent-contact">
                        <h5 className="footerContent-address-title">Yhteystiedot</h5>
                        <p className="footerContent-address-para">Pauli Niemi</p>
                        <p className="footerContent-address-para">+358 40 72888009</p>
                        <p className="footerContent-address-para">Henri Jokinen</p>
                        <p className="footerContent-address-para">+358 50 3495775</p>
                    </div>
                    <div className="footerContent-navi">
                        <h5 className="footerContent-address-title">Navigointi</h5>
                        <p className="footerContent-address-para"><a href="#">Koti</a></p>
                        <p className="footerContent-address-para"><a href="#services">Palvelut</a></p>
                        <p className="footerContent-address-para"><a href="#refe">Referenssit</a></p>
                        <p className="footerContent-address-para"><a href="#about">Meistä</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
