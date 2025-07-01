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
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="p-5 m-10 w-1/2 rounded justify-center flex gap-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;