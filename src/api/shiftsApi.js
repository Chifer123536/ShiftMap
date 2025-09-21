// src/api/shiftsApi.js
import axios from 'axios';

const BASE_URL = 'https://mobile.handswork.pro/api';

// Получаем список смен по координатам
export async function fetchShiftsByCoords(lat, lng) {
  try {
    const response = await axios.get(
      `${BASE_URL}/shifts/map-list-unauthorized?latitude=${lat}&longitude=${lng}`,
    );

    // Проверяем, где лежит массив с данными
    const data = response.data;
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.items)) return data.items;

    return []; // на случай неожиданных данных
  } catch (error) {
    console.error('Error fetching shifts:', error.message);
    throw error;
  }
}
