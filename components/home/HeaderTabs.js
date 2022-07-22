import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        buttonText="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        buttonText="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({buttonText, activeTab, setActiveTab}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === buttonText ? 'black' : 'white',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => {
        setActiveTab(buttonText);
      }}>
      <Text
        style={{
          color: activeTab === buttonText ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;
