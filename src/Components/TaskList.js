import React from 'react';
import Task from './Task';

function TaskList({taskArray, setTaskArray}) {
  return (
    <ul className='my-8 mx-5'>
        {
            taskArray.map(eachTask => {
              return  <Task 
                    text={eachTask.text}
                    key={eachTask.id}
                    eachTask={eachTask}
                    setTaskArray={setTaskArray}
                />
            })
        }
    </ul>
  )
}

export default TaskList