import "./nav.css";
import img from "./intel.webp";

const Navbar = () => {
  return (
    <nav className="container">
        <img src={img} alt="intel" />
      <ul>
        <li>menu</li>
        <li>componentes</li>
        <li>lista</li>
      </ul>
    </nav>
  );
};

export default Navbar;
