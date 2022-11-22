import React from 'react';
import { GrCheckmark } from 'react-icons/gr';
import { BsTrash } from 'react-icons/bs'

function Task({text, eachTask, setTaskArray}) {

    function taskComplete(){
        setTaskArray(prevValue => prevValue.map(task => {
          if(task.id === eachTask.id){
            return {...task, isComplete: !task.isComplete}
          }
          return task
        }))
    }

    function deleteTask(){
      setTaskArray(prevValue => prevValue.filter(task => task.id !== eachTask.id))
    }

  return (
    <li className={`bg-white ${eachTask.isComplete ? 'line-through opacity-50' : ''}`}>
        <div className='flex mt-3 items-center'>
            <div className='flex-1'>{text}</div>
            <i onClick={taskComplete} className='bg-green-600 text-white font-bold text-2xl'><GrCheckmark /></i>
            <i onClick={deleteTask} className='bg-red-600 text-white text-2xl'><BsTrash /></i>
        </div>
    </li>
  )
}

export default Task