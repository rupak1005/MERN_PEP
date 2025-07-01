import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/Context';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  
  // Find the user by id
  const currentUser = user.find(u => u.id === parseInt(id));
  
  if (!currentUser) {
    return (
      <div className="p-5 m-10 bg-red-100 rounded">
        <h2>User not found!</h2>
        <button onClick={() => navigate('/User')} className="p-2 bg-blue-400 rounded">
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 m-10 bg-green-100 rounded">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="mb-4">
        <h2 className="text-xl">Name: {currentUser.name}</h2>
        <h3 className="text-lg">Age: {currentUser.age}</h3>
        <h3 className="text-lg">ID: {currentUser.id}</h3>
      </div>
      <button onClick={() => navigate('/User')} className="p-2 bg-blue-400 rounded">
        Back to Users
      </button>
    </div>
  );
}

export default UserDetail; 