import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const TotalComponent = ({ productList }) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let initialValue = 0;
    let suma = productList.reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue.price)
      , initialValue
    )
    setTotal(suma)
  }, [productList]);
  
  return (
    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >$ {total}</Text>
    </View>
  );
};

export default TotalComponent;
