import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import ShirtCard from '../components/ShirtCard';
import { calculateCartTotal, fetchShirts } from '../api';

const ShirtListScreen = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    const calculateTotal = async () => {
      if (Object.keys(cart).length === 0) {
        setTotal(0);
        return;
      }

      try {
        const data = await calculateCartTotal({
          cart_items: Object.values(cart),
        });
        setTotal(data.total);
      } catch (error) {
        console.error('Error calculating total:', error);
      }
    };

    calculateTotal();
  }, [cart]);

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
      <View>
        <Text>Cart Total: ${parseFloat(total).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ShirtListScreen;
