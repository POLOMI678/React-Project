import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Store/appStore';
import Footer from './Components/Footer';
//import IngredientsList from './Components/IngredientsList';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      
      <Header/>
      
      <Outlet/>
      <Footer/>
  
    </div>
    </Provider>
  );
}

export default App;
