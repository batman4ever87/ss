import "./navbar.scss"
import Logo from "../imports"


const Navbar = () => {
  return (
    <section className="navbar" id="navbar">
      <div className="wrapper">
        <div className="navbarContent">
        <a href="#" className="logo"><img src={Logo} alt="" /></a>
          <div className="menu">
            <ul className="menu-list">
              <li>koti</li>
              <li>palvelut</li>
              <li>meistä</li>
            </ul>
            <button className="cta">yhteystiedot</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
