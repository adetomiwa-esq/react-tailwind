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
        <div className='relative w-8/12 h-8 m-auto'>
          <input 
              type='text'
              className='border-gray-800 border w-full h-full outline-none'
              onChange={updateInput}
              value={freshTask}
          />

          <div onClick={addTaskToArray} className='text-slate-50 absolute -right-6 top-0 border-red-600 border h-full w-1/12 flex items-center justify-center bg-red-500 font-extrabold text-xl'>
            <i>
              <AiOutlinePlus />
            </i>
          </div>
        </div>
    </div>
  )
}

export default FormInput