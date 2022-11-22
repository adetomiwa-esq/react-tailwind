import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

function FormInput({setFreshTask, freshTask, setTaskArray}) {

  function updateInput(e){
    setFreshTask(e.target.value)
  }

  function addTaskToArray(){
    setTaskArray(prevValue => {
      return [...prevValue, {
        text: freshTask,
        isComplete: false,
        id: Math.random() * 10
      }]
    })
    setFreshTask('')
  }
  return (
    <div>
        <div className='relative w-72 h-8'>
          <input 
              type='text'
              className='border-gray-800 border w-72 h-full'
              onChange={updateInput}
              value={freshTask}
          />

          <div onClick={addTaskToArray} className='text-red-600 absolute -right-0 top-0 border-red-600 border h-full w-1/12 flex items-center justify-center'>
            <i>
              <AiOutlinePlus />
            </i>
          </div>
        </div>
    </div>
  )
}

export default FormInput