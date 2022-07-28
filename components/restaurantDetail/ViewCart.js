import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ViewCart = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 40,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            position: "relative",
            backgroundColor: "black",
            alignItems: "center",
            padding: 10,
            width: 300,
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white" }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;
