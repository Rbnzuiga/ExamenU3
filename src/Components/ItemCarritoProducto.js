import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import formatter from "../utils/formatter";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductosContext from "../Context/ProductosContext";

const ItemCarritoProducto = ({ props }) => {
  const { eliminar } = useContext(ProductosContext);
  const { item } = props;
  const { descripcion, precio } = item;

  const OnClickHandler = () => {
    eliminar(item);
  };

  return (
    <View style={style.container}>
      <View style={style.column}>
        <Text style={style.title}>{descripcion}</Text>
        <Text style={style.price}>{formatter.format(precio)}</Text>
      </View>
      <View style={style.columnb}>
        <Icon.Button
          name="minus-square"
          onPress={() => OnClickHandler()}
          style={style.button}
        ></Icon.Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
  },
  column: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
  },
  columnb: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 14,
  },
  price: {
    fontSize: 10,
    color: "gray",
  },
  button: {
    alignSelf: "center",
    fontSize: 24,
  },
});

export default ItemCarritoProducto;
