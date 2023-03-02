import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FilterAndDisplay from './components/FilterAndDisplay';

function App() {
  return (
    <>
      <Navbar />
      <div>824 toilets and counting. Info comp</div>
      <FilterAndDisplay />
      <div className="m-28">map?</div>
    </>
  );
}

export default App;
