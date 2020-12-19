import React, { useContext } from "react";
import { ScrollView, FlatList } from "react-native";
import ItemHomeProducto from "../Components/ItemHomeProducto";

import ProductosContext from "../Context/ProductosContext";

function HomeScreen() {
  const { productos } = useContext(ProductosContext);
  return (
    <ScrollView>
      <FlatList
        data={productos}
        renderItem={(item) => <ItemHomeProducto props={item} />}
        keyExtractor={(item) => item.codigo.toString()}
      />
    </ScrollView>
  );
}

export default HomeScreen;
