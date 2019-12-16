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
        Bienvenido a Chefs4.me
      </div>
      <div className="text">
        ¡Descubre nuevas recetas!
      </div>
    </div>
  </header>
  {/* <!-- Services --> */}
  <section className="services">
    <div className="container grid-3 center">
      <div>
        <i className="fab fa-youtube fa-3x"></i>
        <h3>Fácil</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className="fas fa-chalkboard-teacher fa-3x"></i>
        <h3>Descubre</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className="fas fa-briefcase fa-3x"></i>
        <h3>Añade</h3>
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
          <h3>Sobre Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem
            similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non
            nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.</p>
        </div>
      </div>
    </div>
  </section>

  <footer className="center bg-dark">
    <p>CookBook project &copy; 2019</p>
  </footer>
        </div>
    );
};