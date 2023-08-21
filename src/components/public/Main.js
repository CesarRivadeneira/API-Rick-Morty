import React, { Component } from "react";
// import RickAndMortyService from "../../services/RickAndMorty.service";
import { Cards } from "./Cards";

export default class Main extends Component {
  constructor(props) {
    //cada vez que uso constructor debo usar props(propiedades que recibira este main comp) y super
    super(props); //super es el llamado a Component
    //con esto montamos el componente
    this.state = {  personajes : [] }
  }


  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Consumo de API Rick & Morty</h1>
              <p className="lead text-muted">
               En este ejercicio hecho dentro del curso "Programacion Full Stack de EGG" se realiza el consumo de una API utilizando como tecnologia React y framework Bootstrap5.
              </p>
              <p>
                <a href="https://rickandmortyapi.com/api" className="btn btn-primary my-2">Ver API</a>
                <a href="https://getbootstrap.com/" className="btn btn-secondary my-2">Ver Bootstrap</a>
              </p>
            </div>
          </div>
        </section>
        <Cards/>
      </main>
    );
  }
}
