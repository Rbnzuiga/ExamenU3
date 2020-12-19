import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductosContext from "../Context/ProductosContext";
import formatter from "../utils/formatter";

const LabelTotal = () => {
  const { total } = useContext(ProductosContext);

  return (
    <>
      <Text style={style.text}>{formatter.format(total)}</Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 20,
  },
});

export default LabelTotal;
