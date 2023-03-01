import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="text-3xl font-bold underline header">hello</div>
      <div className="inline-block">div2</div>
      <div>div3</div>
      <div>div4</div>
    </div>
  );
}

export default App;
