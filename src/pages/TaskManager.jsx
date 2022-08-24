import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import { v4 as uuid } from "uuid";


const getTasksFromLocalStorage = () => {
    //get the tasks from the localStorage
const savedTasks = localStorage.getItem("tasks");
if (!savedTasks) return [];
return JSON.parse(savedTasks); 
}




function TaskManager(){
   const [tasks, setTasks] = useState(getTasksFromLocalStorage);
   const [input, setInput] = useState('');


const handleSubmit = e => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
        id: uuid(),
        text: input,
        completed: false,
    };

     
     setTasks([newTask, ...tasks]);
     setInput('');
    //  localStorage.setItem("tasks", JSON.stringify(tasks));
}

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


     const handleDelete = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
     }


    return(
        <div className='bg-blue-500 h-screen flex justify-center items-center'>
              <div className='max-w-xl max-h-96 bg-white rounded-xl px-5 py-10'>
           <form onSubmit={handleSubmit} className="space-x-5 flex w-[30rem] mb-10">
                <input type="text" className='border-2 border-blue-400 p-2 rounded-md outline-none w-10/12' onChange={(e) => setInput(e.target.value)} value = {input}/>
                <button type = "submit" className='bg-blue-600 text-white text-lg py-2 px-5 rounded-md' disabled = {input === ""} >Add</button>
            </form>
         <div className="space-y-3 overflow-y-auto h-56">

            {
                tasks.map((task) =>  (<TaskItem key={task.id} task={task} handleDelete={handleDelete} />))
             }
        </div>

             </div>
        </div>
    )
};

export default TaskManager;