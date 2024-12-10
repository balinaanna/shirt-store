import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { fetchShirts } from '../api';

const ShirtListScreen = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShirts = async () => {
      try {
        const data = await fetchShirts();
        setShirts(data);
      } catch (error) {
        console.error('Error fetching shirts:', error);
      } finally {
        setLoading(false);
      }
    };

    getShirts();
  }, []);

  if (loading) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <View>
      <FlatList
        data={shirts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </View>
  );
};

export default ShirtListScreen;
