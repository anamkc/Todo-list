import React from 'react'

const Tasklist = ({taskList ,deleteItem , updateList}) => {
console.log(taskList)
  return (
    <div className=" p-4">
        
   { taskList.map((tasks , index) => {

    return (
        <div className="border-solid border-2 border-sky-500 rounded-xl  flex justify-between items-center p-2 mt-3" key={index}>
        <div className="text-xl">
        {tasks}
        </div>
          
        <div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-pink-500 hover:to-yellow-500 rounded-lg px-2 mr-1" onClick={() => deleteItem(index)}> delete </button>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-pink-500 hover:to-yellow-500 rounded-lg px-2" onClick={() => updateList(index)}> Edit </button>
        </div>
    </div>
    )
   })}
    </div>
  )
}

export default Tasklist