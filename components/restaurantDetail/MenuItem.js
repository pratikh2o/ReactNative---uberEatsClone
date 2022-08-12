import { View, Text, Image } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

const MenuItem = ({ food }) => {
  const dispatch = useDispatch();

  const selectItems = (item) => {
    console.log(item);
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 2,
      }}
    >
      <BouncyCheckbox
        iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
        fillColor="green"
        onPress={() => selectItems(food)}
      />
      <FoodDetail name={food.name} desp={food.description} price={food.price} />
      <FoodImage image={food.image} />
    </View>
  );
};

const FoodDetail = ({ name, desp, price }) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 19, color: "black" }}>
        {name}
      </Text>
      <Text style={{ color: "black" }}>{desp}</Text>
      <Text style={{ color: "black" }}>{price}</Text>
    </View>
  );
};

const FoodImage = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 5 }}
    />
  );
};

export default MenuItem;
