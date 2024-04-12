import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Samikhya</h1>
        <p className={styles.description}>
          I'm a front-end developer with 7 years of experience using React, HTML
          and CSS. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:samiashis@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
