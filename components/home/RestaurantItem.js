import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = ({restData}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 10}}>
      <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
        <RestaurantImage image={restData.image_url} />
        <RestaurantText name={restData.name} rating={restData.rating} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = ({image}) => {
  return (
    <>
      <Image source={{uri: image}} style={{width: '100%', height: 200}} />
      <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#ffff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantText = ({name, rating}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{}}>30 - 45 {'\u25CF'} min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}>
          {rating}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantItem;
