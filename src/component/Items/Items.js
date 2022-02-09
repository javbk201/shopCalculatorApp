import { 
  FlatList, 
  Dimensions, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;

const Items = ({ productList, state, setState }) => {

  const [isEditing, setIsEditing] = useState();
  const [items, setItems] = useState({
    name: '',
    price: ''
  });
  
  /**
   * @description esta funcion se encarga de camabiar el estado de Items para cambiar el valor de los inputs
   * @param {String} key 
   * @param {Sring} value 
   */
  const onChange = (key, value) => {
    setItems({ ...items, [key]: value })
   
  }
  /**
   * @description Filtra la lista de productos y setea el valor del estado con el arreglo sin el elemento
   * que es igual al id que recibe
   * @param {Number} id 
   */
  const onRemoveItem = (id) => {
    const item = productList.filter(i => id !== i.id)
    //console.log(item);
    setState({
      ...state,
      list: item,
    });
  }
  
  /**
   * @description Cuando le da editar se setea el valor del id en el estado de isEditing. Cuando termina
   * de deditar y va a guardar, la funcion devuelve el valor del estado a null y guarda los valores que 
   * se editaron en el arreglo que viene por las props
   * @param {Number} item 
   */
  const onEditing = (item) => {
    const { name, price, id } = item;
    setItems({
      name: name,
      price: price
    })
    if (isEditing === id) {
      setIsEditing(null)
      const arr = productList.map(item => {
        if (item.id === id){
          return {
            ...item,
            name: items.name,
            price: items.price,
          }
        }else {
          return item
        }
      })
      setState({ ...state, list: arr})
      console.log(arr);
      setItems({
        name: '',
        price: ''
      })
    } else{
      setIsEditing(id)
    }
      
  }

  const renderProducts = (item) => {
    const { name, price, id } = item;
    
    return (
      <View  style={styles.itemContainer}>
        <View style={{ flex: 0.45 }}>
          {
            isEditing === id
            ? <TextInput
                placeholder={name}
                value={items.name}
                onChangeText={(value) => { onChange('name', value) }} />
            : <Text style={styles.Text}>{name}</Text>
          }
        </View>
        <View style={{ alignItems: 'center', flex: 0.35, }}>
          {
            isEditing === id
            ? <TextInput
                keyboardType='number-pad' 
                value={items.price}
                onChangeText={(value) => { onChange('price', value) }}
                />
            : <Text style={styles.Text}>{`$${price}`}</Text>
          }
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 0.2 }}>
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { onRemoveItem(id) }} >
            <Icon name='x' type='feather' color={'gray'} size={26} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onEditing(item) }}>
            <Icon name={isEditing === id ? 'save' : 'edit'} type='feather' color={'gray'} />
          </TouchableOpacity>
        </View>
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
    width: windowWidth * 0.8,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    color: 'black',
  }
});
