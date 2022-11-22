import React from 'react';
import Task from './Task';

function TaskList({taskArray}) {
  return (
    <div>
        {
            taskArray.map(eachTask => {
              return  <Task 
                    text={eachTask.text}
                    key={eachTask.id}
                    eachTask={eachTask}
                    id={eachTask.id}
                />
            })
        }
    </div>
  )
}

export default TaskList