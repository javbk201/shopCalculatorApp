import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Items = ({ productList, state, setState }) => {

  const onRemoveItem = (id) => {
    const item = productList.filter(i => id !== i.id)
    console.log(item);
    setState({ 
      ...state, 
      list: item,
     });
    
  }
    
  return (
    <View style={styles.listContainer}>
      {
          productList?.map((i, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.Text}>{i.name}</Text>
                <Text style={styles.Text}>{i.price}</Text>
              <Text onPress={() => onRemoveItem(i.id)}> - </Text>
              </View>
          ))
      }
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
    listContainer: {
        //backgroundColor: 'red',
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
        paddingHorizontal: 10,
    }
});
