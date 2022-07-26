import React from "react";
import { View, Text, Image } from "react-native";

const restaurantDetail = {
  name: "Hyat Hotel",
  image:
    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg",
  price: "$$",
  reviews: "1500",
  ratings: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, price, reviews, ratings, categories } = restaurantDetail;

// const image =
//   "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg";

// const name = "Hyat Hotel";

// const description = "Thai • Comfort Food • $5 • 🎫 • 4 ⭐ (2013+)";

const formatedCategories = categories.map((cat) => cat.title).join(" • ");

console.log(formatedCategories);

const description = `${formatedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${ratings} ⭐ ${reviews}+`;

const About = () => {
  return (
    <View
      style={{
        borderBottomColor: "#A9A9A9",
        borderBottomWidth: 2,
        paddingBottom: 5,
      }}
    >
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
