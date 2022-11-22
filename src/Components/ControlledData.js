import FormInput  from './FormInput'
import React, { useState } from 'react'
import TaskList from './TaskList';

function ControlledData() {

    const [freshTask, setFreshTask] = useState("");
    const [taskArray, setTaskArray] = useState([])

    console.log(taskArray)

  return (
    <div className='w-9/12'>
        <FormInput 
            setFreshTask={setFreshTask}
            freshTask={freshTask}
            setTaskArray={setTaskArray}
        />
        
        <TaskList 
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
    </div>
  )
}

export default ControlledData