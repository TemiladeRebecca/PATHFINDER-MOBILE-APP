import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return false;
    }
    return true;
  };
