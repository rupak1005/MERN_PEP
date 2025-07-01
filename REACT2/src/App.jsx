import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import UserDetail from './components/UserDetail';
import About from './components/About';

function App() {
  return (
    <div className='p-1 w-1/2 m-auto'>
       <nav className='p-5 m-10 bg-zinc-300 rounded justify-center flex  gap-10 '>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes className="p-5 m-10 w-1/2 rounded justify-center flex  gap-10 ">
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;