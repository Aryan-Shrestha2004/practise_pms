import './Navbar.css'

 const Navbar = () => {
  return (
   <nav className="navbar">
  <div className="logo">MyStore</div>

  <input type="checkbox" id="menu-toggle" />
  <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

  )
}

export default Navbar
