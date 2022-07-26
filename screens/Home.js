import React from "react";
import { View, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem from "../components/home/RestaurantItem";
import { useState, useEffect } from "react";
import { YELP_API } from "../constant";
import BottomList from "../components/home/BottomList";

const Home = ({ navigation }) => {
  const [RestaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("SanDiego");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestData = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    return fetch(yelpUrl, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: YELP_API,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.businesses.filter((bus) => {
          return bus.transactions.includes(activeTab.toLowerCase());
        });
        console.log("ojefoinouhfdou");
        setRestaurantData(data);
      });
  };

  useEffect(() => {
    getRestData();
  }, [city, activeTab]);
  return (
    <View style={{ backgroundColor: "#eee", height: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandle={setCity} />
      </View>
      <ScrollView>
        <Categories />
        {RestaurantData.map((val, index) => {
          return <RestaurantItem restData={val} key={index} />;
        })}
      </ScrollView>
      <BottomList />
    </View>
  );
};

export default Home;
