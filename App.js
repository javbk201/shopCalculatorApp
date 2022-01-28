import React, { useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import Header from './src/component/Header/header';
import NewItem from './src/component/newItem/newItem'


const App = () => {
  const [list, setList] = useState([]);

  return (
    <ThemeProvider>
      <Header />
      <NewItem />
    </ThemeProvider>
  );
};

export default App;
