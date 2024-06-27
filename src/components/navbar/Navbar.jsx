import { useState } from "react"
import "./navbar.scss"
import {Logo, MenuIconOpen, MenuClose} from "../imports"

const Menu = () => (
  <>
  <p><a href="#">Koti</a></p>
  <p><a href="#services">Palvelut</a></p>
  <p><a href="#refe">Referenssit</a></p>
  <p><a href="#about">Meistä</a></p>
  <button className="cta">Ota yhteyttä</button>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="navbar-links">
         <a href="#" className="navbar-links-logo"><img src={Logo} height={60} width={203} alt="Hp-Pinnat logo" /></a>
          <div className="navbar-links-container">
            <Menu />
          </div>
          <div className="navbar-menu">
              {toggleMenu
              ? <img src={MenuClose} alt="" width={58} height={45} onClick={() => setToggleMenu(false)} />
              : <img src={MenuIconOpen} alt="" width={58} height={45}  onClick={() => setToggleMenu(true)} />
              }
              {toggleMenu && (
                <div className="navbar-menu-container scale-up-center">
                  <div className="navbar-menu-container-links">
                    <Menu />
                  </div>
                </div>
              )}
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar
