import React from 'react';
import './App.css';
import Gif_pic from './components/Gif_pic';
import Card_pic from './components/Card_pic';
import Back_cover_card from './components/Back_cover_card';

function App() {
  return (
    <div className="credit_card">
      <Card_pic/>&nbsp;
      <Back_cover_card/>
      <Gif_pic/>
    </div>
  );
};

export default App;
