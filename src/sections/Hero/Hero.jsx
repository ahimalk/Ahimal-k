import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";


function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Ahimal K"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Ahimal Krishna</h1>
        <h2>Software Developer</h2>
        <span>
            <a href="https://x.com/Ahimal_K?t=H1x57yvkdb-T1jvGhXz-sw&s=09" target="_blank">
            <img src={twitterIcon} alt="X Icon"/>
            </a>
            <a href="https://github.com/ahimalk" target="_blank">
            <img src={githubIcon} alt="Github Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/ahimal-k-3b0139237/" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin Icon"/>
            </a>
        </span>
        <p className={styles.description}>With a passion for developing modern React web apps for Commercial Businesses</p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
