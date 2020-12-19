import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLinkTo } from "@react-navigation/native";
import ProductosContext from "../Context/ProductosContext";

const ButtonHeaderRight = () => {
  const { carro } = useContext(ProductosContext);

  const linkTo = useLinkTo();

  const OnClickHandler = () => {
    linkTo("/Cart");
  };

  return (
    <Icon.Button
      name="shopping-cart"
      onPress={() => OnClickHandler("/TodoPanel")}
    >
      <Text style={styles.text}>{carro.length}</Text>
    </Icon.Button>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default ButtonHeaderRight;
