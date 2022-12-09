import React from "react";
import { Routes as Switch, Route } from "react-router-dom"; 
import { Inicio } from "./Inicio/index";
import { ProductosLista } from "./Productos/Index";
import { ProductoDetalles } from "./Productos/ProductoDetalles";
export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/Productos" exact element={<ProductosLista/>} />
        <Route path="/Producto/:id" exact element={<ProductoDetalles/>} />
        <Route path="/" exact element={<Inicio/>} />
      </Switch>
    </section>
  );
};
