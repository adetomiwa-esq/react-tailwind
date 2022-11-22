import FormInput  from './FormInput'
import React, { useState } from 'react'
import TaskList from './TaskList';

function ControlledData() {

    const [freshTask, setFreshTask] = useState("");
    const [taskArray, setTaskArray] = useState([])

    console.log(taskArray)

  return (
    <div>
        <FormInput 
            setFreshTask={setFreshTask}
            freshTask={freshTask}
            setTaskArray={setTaskArray}
        />
        {freshTask}
        <TaskList 
          taskArray={taskArray}
        />
    </div>
  )
}

export default ControlledData