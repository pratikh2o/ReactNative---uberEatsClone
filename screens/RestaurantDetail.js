import React from 'react';
import {View, Text, Image} from 'react-native';
import About from '../components/restaurantDetail/About';

const image =
  'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg';

const name = 'Hyat Hotel';

const description = 'Thai • Comfort Food • $5 • 🎫 • 4 ⭐ (2013+)';

const RestaurantDetail = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDes des={description} />
    </View>
  );
};

const RestaurantImage = ({image}) => {
  return <Image source={{uri: image}} style={{width: '100%', height: 150}} />;
};

const RestaurantTitle = ({title}) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
      }}>
      {title}
    </Text>
  );
};

const RestaurantDes = ({des}) => {
  return (
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15,
      }}>
      {des}
    </Text>
  );
};

export default RestaurantDetail;
