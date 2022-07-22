import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomList = () => {
  return (
    <View
      style={{
        borderTopColor: '#A9A9A9',
        borderTopWidth: 3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 7,
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Icon icon={'home'} text={'Home'} />
        <Icon icon={'search'} text={'Search'} />
        <Icon icon={'shopping-bag'} text={'Grocery'} />
        <Icon icon={'receipt'} text={'Orders'} />
        <Icon icon={'user'} text={'Account'} />
      </View>
    </View>
  );
};

const Icon = ({icon, text}) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          size={25}
          name={icon}
          style={{marginBottom: 3, alignSelf: 'center'}}
        />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomList;
