import {useState} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import React from 'react';

const OVERLAY_MODAL = props => {
  const listOverlay = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.onSelect(item.item);
        }}
        style={{
          borderBottomWidth: 1,
          flexDirection: 'row',
          height: 30,
          justifyContent: 'space-between',
          borderBottomColor: '#cccccc',
        }}>
        <Text style={{color: 'black', fontSize: 17}}>{item.item.name}</Text>
        <Icon name="done" type="material" color="#cccccc" />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Overlay
        overlayStyle={{
          height: '30%',
          width: '90%',
          padding: 20,
          borderRadius: 10,
        }}
        isVisible={props.isVisible}
        onBackdropPress={props.onBackdropPressX}>
        <Text style={{height: 50, color: 'black', fontSize: 15}}>
          {props.Hedding}
        </Text>
        <FlatList
          data={props.datalist}
          renderItem={item => listOverlay(item)}
        />
      </Overlay>
    </>
  );
};

export default OVERLAY_MODAL;

const styles = StyleSheet.create({});
