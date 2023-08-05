import React from 'react';
import { Routes, Route } from "react-router-dom"
import Main from './Componant/Main'
import './App.css'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </div>
  );
};

export default App;
