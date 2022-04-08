import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (STORAGE_KEY, STORAGE_VALUE) => {

  console.log("STORAGE_VALUE=>>>>>>>>>>.",STORAGE_KEY,STORAGE_VALUE)
  try {
    await AsyncStorage.setItem(STORAGE_KEY, STORAGE_VALUE);
    console.log('save the data to the storage', STORAGE_KEY);
  } catch (e) {
    console.log('Failed to save the data to the storage', STORAGE_KEY);
  }
};

const getItem = async (STORAGE_KEY) => {
  try {
    const item = await AsyncStorage.getItem(STORAGE_KEY);

    if (item !== null) {
      return item;
    } else {
      return '';
    }
  } catch (e) {
    console.log('Failed to fetch the data from storage', STORAGE_KEY);
  }
};

const deleteItem = async (STORAGE_KEY) => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('clear the async storage.', STORAGE_KEY);
  } catch (e) {
    console.log('Failed to clear the async storage.', STORAGE_KEY);
  }
};

const deleteAllItem = async () => {
    try {
        await AsyncStorage.clear()
         console.log('clear the async storage.')
    } catch (e) {
         console.log('Failed to clear all the async storage.')
    }
}

export {setItem, getItem, deleteItem,deleteAllItem};
