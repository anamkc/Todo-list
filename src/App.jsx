import Input from './components/input';
import './App.css'
import { useState } from 'react'

function App() {
const[data , setData] = useState();

  return (
    <div className="h-screen flex justify-center items-center   bg-slate-600 ">
    <div className="h-2/3 w-1/2 bg-orange-400 rounded-2xl ">
     <h1 className="text-2xl text-center m-6 ">Todo List</h1>
    <Input/>
     </div>
    </div>
  )
}

export default App
