import React, { FC } from 'react';
import './LandingPage.css';
import logo from "../../img/logo.png";

export const LandingPage: FC = () => {
    return (
        <div>
            <header className="showcase">
    <div className="content">
      <img src={logo} className="logo" alt="Traversy Media"></img>
      <div className="title">
        Welcome To Traversy Media
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel.
      </div>
    </div>
  </header>
  {/* <!-- Services --> */}
  <section className="services">
    <div className="container grid-3 center">
      <div>
        <i className="fab fa-youtube fa-3x"></i>
        <h3>YouTube</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className="fas fa-chalkboard-teacher fa-3x"></i>
        <h3>Courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className="fas fa-briefcase fa-3x"></i>
        <h3>Freelancing Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
    </div>
  </section>

  {/* <!-- About --> */}
  <section className="about bg-light">
    <div className="container">
      <div className="grid-2">
        <div className="center">
          <i className="fas fa-laptop-code fa-10x"></i>
        </div>
        <div>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem
            similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non
            nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.</p>
        </div>
      </div>
    </div>
  </section>

  <footer className="center bg-dark">
    <p>Traversy Media &copy; 2018</p>
  </footer>
        </div>
    );
};