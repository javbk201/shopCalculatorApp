import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

const NewItem = ({ setState, state }) => {
  

  const onChange = (key, value) => {
    setState({ ...state, [key]: value})
  }

  const addItem = () => {
    const newItem = { 
      name: state.name,
      price: state.price,
      id: new Date().valueOf()
    };
    setState({
       ...state, 
       list: [ ...state.list, newItem],
       name: '',
       price: ''
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product</Text>
      <View style={styles.addElementStyle}>
        <View>
          <TextInput
          style={styles.input}
          placeholder='Add a product'
          onChangeText={(value) => { onChange('name', value) }}
          value={state.name}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingTop: 7, fontSize: 16, fontWeight: 'bold' }}>$</Text>
          <TextInput 
            style={[styles.input, {marginLeft: 0} ]}
            placeholder='Add a Price' 
            keyboardType='number-pad'
            value={state.price}
            onChangeText={(value) => { onChange('price', value) }}/>
        </View>
        <TouchableOpacity 
          style={{ paddingLeft: 5, paddingTop: 10 }} 
          onPress={addItem}
        >
          <Icon 
            name='plus-circle'
            type='feather' /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewItem;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    input: {
      paddingTop: 5,
      fontSize: 19,
      marginHorizontal: 10,
    },
    label: {
        fontSize: 20,
        marginLeft: 6,
    },
    addElementStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
