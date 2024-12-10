import React from 'react';
import { View, Text } from 'react-native';

const ShirtCard = ({ shirt }) => {
  return (
    <View>
      <Text>{shirt.name}</Text>
      <Text>${parseFloat(shirt.price).toFixed(2)}</Text>
    </View>
  );
};

export default ShirtCard;
