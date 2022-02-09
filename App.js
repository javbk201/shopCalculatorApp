import React, { useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './src/component/Header/header';
import Items from './src/component/Items/Items';
import NewItem from './src/component/newItem/newItem'
import TotalComponent from './src/component/Total/TotalComponent';


const App = () => {
  const [state, setState] = useState({
    id: '',
    name: '',
    price: '',
    list: [],
    total: ''
  });

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#3730a3' }} />
      <SafeAreaView style={{ flex: 1, }}>
        <StatusBar backgroundColor={'#3730a3'} barStyle={'light-content'} />
        <Header />
        <NewItem setState={setState} state={state} />
        <Items productList={state.list} setState={setState} state={state}  />
        <TotalComponent productList={state.list} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
