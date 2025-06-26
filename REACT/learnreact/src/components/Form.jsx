import React, { useState } from 'react';

function Form() {
  
  function submitform(event){
    event.preventDefault();
    const form=document.getElementById('form');
    const formdata=new FormData(form);
    // console.log(formdata);
    const data = {};
    for (const [key, value] of formdata.entries()) {
      data[key] = value;
    }
      console.log(data);
  }
  
  return (
    <div className='flex justify-center items-center h-screen'>
      <form action="" onSubmit={submitform} className='flex flex-col gap-4 p-4 w-fit bg-sky-100 rounded-md shadow-md' id='form'>
        <label htmlFor="name">Name</label>
        <input className='p-2 rounded-md shadow-md' type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input className='p-2 rounded-md shadow-md' type="email" id="email" name="email" />
        <label htmlFor="password">Password</label> 
        <input className='p-2 rounded-md shadow-md ' type="password" id="password" name="password" />
        <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">Submit</button>
        
      </form>
      
    </div>
  );
}

export default Form;