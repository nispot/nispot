import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <img
        className="footer-logo"
        src="favicon.ico"
        alt="logo" />
      <div className="footer-text">
        <p>Nicolás Arichuluaga - Fullstack Developer</p>
        <p>Designed and developed by Me</p>
      </div>
    </div>
  );
}

export default Footer;