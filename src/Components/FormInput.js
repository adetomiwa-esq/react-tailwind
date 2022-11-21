import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

function FormInput({setFreshTask, freshTask}) {

  function updateInput(e){
    setFreshTask(e.target.value)
  }

  function addTaskToArray(){
    alert('hello')
  }
  return (
    <div>
        <div className='relative w-72'>
          <input 
              type='text'
              className='border-gray-800 border w-72'
              onChange={updateInput}
              value={freshTask}
          />
          <i onClick={addTaskToArray} className='text-red-600 absolute -right-0'><AiOutlinePlus /></i>
        </div>
    </div>
  )
}

export default FormInput