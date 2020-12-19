import React, { useState } from "react";
import dataProductos from "../data";
import ProductosContext from "./ProductosContext";
import { v4 as uuidv4 } from "uuid";

function ProductosState(props) {
  const [productos, setproductos] = useState(dataProductos);
  const [carro, setCarro] = useState("");
  const [total, setTotal] = useState(0);

  const eliminar = (producto) => {
    const newProductList = carro.filter((item) => {
      return item.id !== producto.id;
    });
    setTotal(total - producto.precio);
    setCarro(newProductList);
  };

  const agregar = (producto) => {
    const id = uuidv4();
    const newProduct = { id, ...producto };
    const newCartList = [...carro, newProduct];
    setTotal(total + newProduct.precio);
    setCarro(newCartList);
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        carro,
        total,
        setproductos,
        setCarro,
        setTotal,
        eliminar,
        agregar,
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
}

export default ProductosState;
