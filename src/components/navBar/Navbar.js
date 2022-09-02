import "./nav.css";
import img from "./aseets/img/intel.webp";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={img} alt="intel" />
      <ul>
        <li>menu</li>
        <li>componentes</li>
        <li>lista</li>
        <li>contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
