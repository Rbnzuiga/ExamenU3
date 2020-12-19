import React, { useContext } from "react";
import { Button, Alert } from "react-native";
import ProductosContext from "../Context/ProductosContext";

const ButtonComprar = () => {
  const { setTotal, setCarro } = useContext(ProductosContext);

  const OnClickHandler = () => {
    Alert.alert("Alert", "Gracias por su compra", [{ text: "OK" }]);
    setTotal(0);
    setCarro("");
  };

  return (
    <>
      <Button title="Comprar" onPress={() => OnClickHandler()}></Button>
    </>
  );
};

export default ButtonComprar;
