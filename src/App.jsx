import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx'
import React from 'react'
import { Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route exact path="/" element={ <Flex direction="row" justify="center" align="center" ><ItemListContainer /></Flex>} />
        <Route path="/item/:id" element={<Flex justify="center" align="center" direction="row"> <ItemDetailContainer /></Flex>} />
        <Route path="/category/:categoria" element={ <Flex justify="center" align="center"><ItemListContainer /> </Flex>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
