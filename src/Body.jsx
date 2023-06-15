import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Auth from './pages/Auth';

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default Body