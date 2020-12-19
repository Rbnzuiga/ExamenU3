import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import ButtonComprar from "../Components/ButtonComprar";
import ItemCarritoProducto from "../Components/ItemCarritoProducto";
import LabelTotal from "../Components/LabelTotal";

import ProductosContext from "../Context/ProductosContext";

function CartScreen() {
  const { carro } = useContext(ProductosContext);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {carro.length > 0 ? (
        <>
          <FlatList
            style={{ flex: 1 }}
            data={carro}
            renderItem={(item) => <ItemCarritoProducto props={item} />}
            keyExtractor={(item) => item.id}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <LabelTotal />
            <ButtonComprar />
          </View>
        </>
      ) : (
        <Text
          style={{
            fontSize: 24,
            color: "black",
            textAlign: "center",
          }}
        >
          No tienes Productos
        </Text>
      )}
    </View>
  );
}

export default CartScreen;
