export default function Footer() {
  return (
    <footer className="footer-section an-footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-logos">
            <img
              src="./img/Gingham-brand-logo-dark.svg"
              alt="Brand logo"
              className="footer-brand-logo"
            />
            <div className="footer-socials">
              <a href="#" className="footer-socials-link">
                <img src="./img/instagram.svg" />
              </a>
              <a href="#" className="footer-socials-link">
                <img src="./img/twitter.svg" />
              </a>
              <a href="#" className="footer-socials-link">
                <img src="./img/linkedin.svg" />
              </a>
            </div>
          </div>
          <div className="footer-nav-box">
            <ul className="footer-nav">
              <li className="footer-nav-link">
                <a href="#">Home</a>
              </li>
              <li className="footer-nav-link">
                <a href="#">About Us</a>
              </li>
              <li className="footer-nav-link">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-cta">
            <h6 className="footer-cta-title">See full collection</h6>
            <a href="#" className="small-cta small-cta-dark">
              Shop now
            </a>
          </div>
        </div>
        <p className="copyright">&copy;Copyright Gingham</p>
      </div>
    </footer>
  );
}
