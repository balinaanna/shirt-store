import React from 'react';
import { View, Text } from 'react-native';
import Counter from 'react-native-counters';

const ShirtCard = ({ shirt, onChangeQuantity }) => {
  return (
    <View>
      <Text>{shirt.name}</Text>
      <Text>${parseFloat(shirt.price).toFixed(2)}</Text>
      <Counter
        start={0}
        min={0}
        onChange={(number) => onChangeQuantity(shirt.id, number)}
      />
    </View>
  );
};

export default ShirtCard;
