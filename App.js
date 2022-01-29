import React, { useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import Header from './src/component/Header/header';
import Items from './src/component/Items/Items';
import NewItem from './src/component/newItem/newItem'


const App = () => {
  const [list, setList] = useState([
    {
      name: 'Product 1',
      price: '$18272',
    },
    {
      name: 'Product 2',
      price: '$77133'
    }

  ]);

  return (
    <ThemeProvider>
      <Header />
      <NewItem />
      <Items productList={list} />
    </ThemeProvider>
  );
};

export default App;
