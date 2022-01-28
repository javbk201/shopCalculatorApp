import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

const NewItem = () => {
  const [element, setElement] = useState({
    name: '',
    price: '',
  });

  const onChangePrice = (value) => {
    setElement({ ...element, price: value})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product</Text>
      <View style={styles.addElementStyle}>
        <View>
          <TextInput
          style={styles.input}
          placeholder='Add a product'
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingTop: 7, fontSize: 16, fontWeight: 'bold' }}>$</Text>
          <TextInput 
            style={[styles.input, {marginLeft: 0} ]}
            placeholder='Add a Price' 
            keyboardType='number-pad'
            value={element.price}
            onChangeText={(value) => { onChangePrice(value) }}/>
        </View>
        <TouchableOpacity style={{ paddingLeft: 5, paddingTop: 10 }} >
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
        flex: 1,
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
