import React from 'react';
import Form from './components/Form';
import Counter from './components/Counter';
import UseState from './components/UseState';
import Todolist from './components/Todolist';
import Products from './components/Products';
// import { Button } from './components/ui/button';
import Button from './components/Button';
import './index.css'
function App() {
  return (
    <div>
       <Form /> 
      <Counter />
      <UseState />
      <Todolist /> 
      <Products /> 
      <Button />
    </div>
  );
}

export default App;