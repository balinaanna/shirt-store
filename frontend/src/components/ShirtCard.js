import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Counter from 'react-native-counters';

const ShirtCard = memo(({ shirt, onChangeQuantity }) => {
  return (
    <View className='flex-row mv-4 p-4 border-b border-gray-100'>
      <View className='flex-1'>
        <Text className='text-2xl font-semibold'>{shirt.name}</Text>
        <Text className='text-lg text-gray-600'>
          ${parseFloat(shirt.price).toFixed(2)}
        </Text>
      </View>
      <View className='self-center'>
        <Counter
          start={0}
          min={0}
          onChange={(number) => onChangeQuantity(shirt.id, number)}
        />
      </View>
    </View>
  );
});

export default ShirtCard;
