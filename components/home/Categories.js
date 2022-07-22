import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 8,
        paddingVertical: 10,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(val => {
          return (
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 20,
              }}
              key={val.text}>
              <Image
                source={val.image}
                style={{height: 40, width: 50, resizeMode: 'contain'}}
              />
              <Text style={{fontWeight: '900', color: 'black', fontSize: 13}}>
                {val.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
