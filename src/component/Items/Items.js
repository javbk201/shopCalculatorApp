import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';

const Items = ({ productList, state, setState }) => {

  const onRemoveItem = (id) => {
    const item = productList.filter(i => id !== i.id)
    //console.log(item);
    setState({
      ...state,
      list: item,
    });
  }

  const onEditing = (id) => {
    console.log('editando', id);
  }

  const renderProducts = (item) => {
    return (
      <View style={styles.itemContainer}>
        {/* Name */}
        <View style={{ flex: 0.45 }}>
          <Text style={styles.Text}>{item.name}</Text>
        </View>
        {/* Name */}
        {/* price */}
        <View style={{ flex: 0.35 }} >
          <Text style={styles.Text}>$ {item.price}</Text>
        </View>
        {/* Price */}
        {/* Buttons */}
        <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
          <TouchableOpacity style={{ marginRight: 10, }} onPress={() => onRemoveItem(item.id)}>
            <Icon
              name='x'
              type='feather'
              color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => onEditing(item.id)}>
            <Icon
              name='edit'
              type='feather'
              color='gray'
              size={20} />
          </TouchableOpacity>
        </View>
        {/* Buttons */}
      </View>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList 
        data={productList}
        renderItem={({ item }) => renderProducts(item) }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center"

  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    //paddingHorizontal: 10,
  }
});
