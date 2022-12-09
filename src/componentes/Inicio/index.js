import React from "react";
import Portada from "../imagenes/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="Inicio">
      <Link to="/">
        <h1 className="title">Inicio</h1>
        <img src={Portada}alt="Inicio"/>
      </Link>
      <Link to="/Productos">
        <h1 className="title">Productos</h1>
        <img src={Portada}alt="Inicio"/>
      </Link>
    </div>
  );
};
