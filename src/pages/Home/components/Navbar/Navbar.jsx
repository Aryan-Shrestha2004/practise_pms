import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* <li><Link to="/products">Products</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li> */}

        <li>
          <Link to="/addProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
        <li>
          <Link to="/test2">test2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
