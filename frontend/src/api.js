const BASE_URL = 'http://localhost:3000';

export const fetchShirts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/shirts`);
    if (!response.ok) throw new Error('Failed to fetch shirts');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const calculateCartTotal = async (cart_items) => {
  try {
    const response = await fetch(`${BASE_URL}/calculate_total`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart_items),
    });
    if (!response.ok) throw new Error('Failed to calculate cart total');
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
