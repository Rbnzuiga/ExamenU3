import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductosProvider from "./src/Context/ProductosProvider";
import HomeScreen from "./src/Screens/HomeScreen";
import CartScreen from "./src/Screens/CartScreen";
import ButtonHeaderRight from "./src/Components/ButtonHeaderRight";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProductosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#007FFF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Ebay",
              headerRight: () => <ButtonHeaderRight />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: "Carrito de Compras",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductosProvider>
  );
}
