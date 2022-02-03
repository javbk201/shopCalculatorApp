import React, { useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import Header from './src/component/Header/header';
import Items from './src/component/Items/Items';
import NewItem from './src/component/newItem/newItem'


const App = () => {
  const [state, setState] = useState({
    id: '',
    name: '',
    price: '',
    list: [
      {
        id: 'kjahcsc78',
        name: 'Product 1',
        price: '$78665'
      }
    ],
    total: ''
  });

  return (
    <ThemeProvider>
      <Header />
      <NewItem setState={setState} state={state} />
      <Items productList={state.list} setState={setState} state={state}  />
    </ThemeProvider>
  );
};

export default App;
