import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">welcome to Khamr El Sale7en</span>
          <h1 className="home__title">
            Discover Amazing Coffee House $ Get Energy
          </h1>
          <p className="home__description">
            There are many variationsof passages available but the majority have
            suffered alterationin some from by injected humour or randomised
            words
          </p>

          <div className="home__btns">
            <a href="#menu" className="btn">
              {" "}
              Ckeck Menu
            </a>
            <a href="#reservation" className="btn home__btn">
              {" "}
              Book Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
