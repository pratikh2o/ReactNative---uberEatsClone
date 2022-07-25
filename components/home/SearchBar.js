import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
const SearchBar = ({ cityHandle }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "" }}
        onPress={(data) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandle(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 28,
            fontWeight: "200",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons
                name="location-sharp"
                size={24}
                style={{ color: "black" }}
              />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 5, color: "black" }}
              />
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchBar;
