import React from "react";
import aboutImage from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";
import "../../../src/App.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImage} alt="" className="about__img" />
        </div>
        <div className="about__content">
          <h2 className="section__title" data-title="About Us">
            Fresh Quality And Organic Tasty Coffee House For You
          </h2>

          <p className="about__description">
            There are many variations of passages of lorem Ipsum available , but{" "}
            the majority have suffered alteration in some form , by injected
            humour , or randomised words which don't look even slighlty
            believable.
          </p>
          <div className="about__details grid">
            <p className="about__details-descritption">
              <FiCheck /> At vero eos et accusamus et iusto odio
            </p>
            <p className="about__details__descritption">
              <FiCheck /> Established fact that a reader will be distracted
            </p>
            <p className="about__details__descritption">
              <FiCheck /> Sed ut perspiciatis omnis iste natus sit
            </p>
          </div>
          <a href="#team" className="btn">
            {" "}
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
