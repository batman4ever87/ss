import "./navbar.scss"
import Logo from "../imports";

const Navbar = () => {
  return (
   <div className="wrapper">
    <section className="navbar" id="navbar">
        <div className="logo">
            <img src={Logo} width={115} height={49} alt="Solkikadun Schalken Logo" />
        </div>
    </section>
   </div>
  )
}

export default Navbar
