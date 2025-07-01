import React, { useContext } from 'react';
import {userContext} from "../Context/Context"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate=useNavigate()
  const {user, setuser}=useContext(userContext)
  return (
    <div>
      {user.map((u,index) => (
        <div key={index} className='p-3 bg-sky-100 m-3 rounded'>
                    <Link
            to={`/user/${u.id}`}
            className="m-2 bg-red-300 p-3">
              {u.name}
            </Link>
          
        </div>
      ))}
      <button onClick={()=>navigate("/")} className='p-3 bg-red-400 rounded '> go back</button>
    </div>
  );
}

export default User;