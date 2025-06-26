import React, { useEffect, useState } from "react";

export default function Todolist(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addTodo(){
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-slate-200 p-8">
            <div className="bg-zinc-100 rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
                <input 
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    type="text" 
                    placeholder="Enter todo" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-4" 
                    onClick={addTodo}
                >
                    Add Todo
                </button>
                <ol className="space-y-2">
                    {todos.map((todo, index) => (
                        <li key={index} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800">
                            {todo}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}