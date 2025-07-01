import React from 'react';

function Home() {
  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>Home Page</h1>
      <img src='https://picsum.photos/800/600' alt='Home Page' className='object-cover w-full h-64' />
      <p className='p-5 flex justify-center italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nobis fugit ad veritatis dolor expedita voluptatibus ut hic iusto exercitationem!</p>
    </div>
  );
}

export default Home;