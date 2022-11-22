import React from 'react';
import { GrCheckmark } from 'react-icons/gr';
import { BsTrash } from 'react-icons/bs'

function Task({text, eachTask}) {

    function taskCompleted(){
        console.log(eachTask)
    }

  return (
    <div>
        <div>
            <div>{text}</div>
            <i onClick={taskCompleted}><GrCheckmark /></i>
            <i><BsTrash /></i>
        </div>
    </div>
  )
}

export default Task