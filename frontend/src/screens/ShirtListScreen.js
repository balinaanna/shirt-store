import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import ShirtCard from '../components/ShirtCard';
import { fetchShirts } from '../api';

const ShirtListScreen = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

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

  const handleChangeQuantity = (id, number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (number === 0) {
        delete updatedCart[id];
      } else {
        updatedCart[id] = { id, quantity: number };
      }
      return updatedCart;
    });
  };

  if (loading) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <View>
      <FlatList
        data={shirts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShirtCard shirt={item} onChangeQuantity={handleChangeQuantity} />
        )}
      />
    </View>
  );
};

export default ShirtListScreen;
