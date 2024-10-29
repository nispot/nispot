import "./Nav.scss";

export const Nav = () => {
  return (
    <>
      <nav className="menu menu-central">
        <ul id="myMenu">
          <li data-menuanchor="home" className="active">
            <a href="#home">Home</a>
          </li>
          <li data-menuanchor="about">
            <a href="#about">About Me</a>
          </li>
          <li data-menuanchor="skills">
            <a href="#skills">Skills</a>
          </li>
          <li data-menuanchor="experience">
            <a href="#experience">Experience</a>
          </li>
          <li data-menuanchor="works">
            <a href="#works">Works</a>
          </li>
        </ul>
      </nav>
      <nav className="menu menu-right">
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/nispot/" target="_blank" rel="noreferrer">
            <img
              className="linkedin-icon"
              src="images/linkedin.svg"
              alt="Send me an email"
            />
            LinkedIn
            </a>
          </li>
          <li>
          <a href="https://github.com/nispot" target="_blank" rel="noreferrer">
            <img
              className="github-icon"
              src="images/github.svg"
              alt="Send me an email"
            />{" "}
            Github
            </a>
          </li>
          <li>
          <a href="mailto:nicoarichu@gmail.com">
            <img
              className="email-icon"
              src="images/email.svg"
              alt="Send me an email"
            />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
