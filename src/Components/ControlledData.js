import FormInput  from './FormInput'
import React, { useState } from 'react'

function ControlledData() {

    const [freshTask, setFreshTask] = useState("")

  return (
    <div>
        <FormInput 
            setFreshTask={setFreshTask}
            freshTask={freshTask}
        />
        {freshTask}
    </div>
  )
}

export default ControlledData