import React from "react";
import { Form } from "./Form";

const InfoPanel = ({ title, children }) => (
  <div className="panel has-background-white">
    <p className="panel-heading has-text-centered">{title}</p>
    <div className="panel-block is-block has-text-centered p-5">{children}</div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="has-background-light">
      <section
        className="hero is-fullheight is-fullwidth"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/Iglesia-Los-Perales.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10 has-text-centered px-5">
                <h1
                  className="title is-1 has-text-white"
                  style={{ fontFamily: "Madina", fontSize: "6rem" }}
                >
                  Claudia Fadic & Claudio Yáñez
                </h1>
                <h2 className="subtitle is-3 has-text-white mt-4">
                  8 de marzo de 2025 a las 12:30 hrs.{" "}
                </h2>
                <p className="is-size-4 has-text-white mt-4">
                  Capilla de Los Perales • Quilpué
                </p>
                <button className="button is-light is-large is-outlined mt-6">
                  Confirmar asistencia
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-centered is-multiline">
            <div className="column is-4-desktop is-10-tablet is-12-mobile">
              <InfoPanel title="Ubicación">
                <h3 className="is-size-4 mb-4">Viña Los Perales</h3>
                <p className="mb-4">
                  Parcela B-10, s/n
                  <br />
                  Quilpué, V Región
                </p>
                <a
                  href="https://maps.app.goo.gl/Vdn1mKXFPtJnVCer5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-link is-outlined"
                >
                  Ver en Maps
                </a>
              </InfoPanel>
            </div>

            <div className="column is-4-desktop is-10-tablet is-12-mobile">
              <InfoPanel title="Código de vestimenta">
                <h3 className="is-size-4 mb-4">Vestimenta formal</h3>
                <p>
                  Mujeres: Zapatos cómodos
                  <br />
                  Hombres: Traje y corbata
                </p>
              </InfoPanel>
            </div>

            <div className="column is-4-desktop is-10-tablet is-12-mobile">
              <InfoPanel title="Lista de Regalos">
                <h3 className="is-size-4 mb-4">Novios París</h3>
                <p className="mb-4">Código: 18463156</p>
                <a
                  href="https://www.noviosparis.cl/home/couple-catalog/18463156"
                  className="button is-link is-outlined"
                >
                  Ver lista
                </a>
              </InfoPanel>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
};

export default LandingPage;
