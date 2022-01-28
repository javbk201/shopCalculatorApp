import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const NewItem = () => {
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
        <View>
          <TextInput 
            style={styles.input}
            placeholder='Add a Price' 
            keyboardType='number-pad'/>
        </View>
        <TouchableOpacity style={{ paddingTop: 10 }} >
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
      fontSize: 16,
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
