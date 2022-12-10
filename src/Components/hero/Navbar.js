export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="./img/Gingham-brand-logo.svg" />
      <div className="navlink-box">
        <a href="#" className="navlink">
          Home
        </a>
        <a href="#" className="navlink">
          About
        </a>
        <a href="#" className="navlink">
          Login
        </a>
        <a href="#" className="navlink small-cta">
          Shop now
        </a>
      </div>
    </nav>
  );
}
