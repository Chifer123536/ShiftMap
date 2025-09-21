// src/services/geolocation.js
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// Запрашиваем разрешение на геолокацию у пользователя
export async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Required to show shifts near you',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } else {
    const status = await Geolocation.requestAuthorization('whenInUse');
    return status === 'granted';
  }
}

// Получаем текущие координаты пользователя
export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    });
  });
}
