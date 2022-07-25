import React from "react";
import About from "../components/restaurantDetail/About";
import { View, ScrollView } from "react-native";
import MenuItem from "../components/restaurantDetail/MenuItem";

const data = [
  {
    name: "Tandoori Kab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kebab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kebab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kebab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kebab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kebab",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
  {
    name: "Tandoori Kb",
    description: "Fresh leg peices of chiken bite it like wild tiger bithes!!",
    price: "$19.30",
    image:
      "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
  },
];

const RestaurantDetail = () => {
  return (
    <View style={{ height: "100%" }}>
      <About />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {data.map((food, index) => {
          return <MenuItem food={food} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default RestaurantDetail;
