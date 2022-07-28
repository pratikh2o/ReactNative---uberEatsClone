import React from "react";
import { View, Text, Image } from "react-native";

const About = ({ resData }) => {
  const { name, image, ratings, price, reviews, categories } = resData.params;

  const formatedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formatedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${ratings} ⭐ ${reviews}+`;

  return (
    <View
      style={{
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 2,
        paddingBottom: 5,
      }}
    >
      {console.log(name, image)}
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDes des={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <Image source={{ uri: image }} style={{ width: "100%", height: 150 }} />
  );
};

const RestaurantTitle = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
        color: "black",
      }}
    >
      {title}
    </Text>
  );
};

const RestaurantDes = ({ des }) => {
  return (
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {des}
    </Text>
  );
};

export default About;
