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
