import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Header />
        <ProductScreen />
      <Footer />
    </>
  );
}

export default App;
