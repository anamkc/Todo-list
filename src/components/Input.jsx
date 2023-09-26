import React, { useState } from "react";
import Tasklist from "./Tasklist";

export default function Input() {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(true);
  const [editId, setEditId] = useState(null);

  function addActivity() {
    // settasklist([...taskList , takeinput])
    //console.log(taskList)
    setTaskList((taskList) => {
      if (input !== "") {
        const newList = [...taskList, input];
        setInput("");
        return newList;
      } else {
        return taskList;
      }
    });
  }

  function updateActivity() {
    console.log(editId);
    setTaskList(
      taskList.map((item, index) => {
        console.log(index)
        if (input !== "" && index === editId) {
          return input;
        } else {
          return item;
        }
      })
    );
    console.log("hello");
    setEdit(true);
    setInput("");
  }
  //const deleteItem = ((index) => {
  //setTaskList(taskList.filter(taskList.index!== index))
  // console.log(index);
  //const newDataList = taskList.filter((current, id) => {
  //  return index !== id;
  // })
  // setTaskList(newDataList);

  //});
  const deleteItem = (index) =>
    setTaskList(taskList.filter((tasks, id) => index !== id));

    
  const updateList = (index) => {
    setEdit(false);
    setInput(taskList.filter((prevtask, id) => index == id));
    setEditId(index);
  };
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <input
            type="text"
            placeholder="Enter your task"
            className="border border-gray-400 py-1 rounded-xl w-80 text-xl text-gray-700 text-center focus:outline-none "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {
          //input !== "" &&
          edit ? (
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-1 px-8 border-none rounded-xl hover:from-pink-500 hover:to-yellow-500"
              onClick={addActivity}
            >
              Add
            </button>
          ) : (
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-1 px-8 border-none rounded-xl hover:from-pink-500 hover:to-yellow-500"
              onClick={updateActivity}
            >
              Update
            </button>
          )
        }
      </div>
      <Tasklist
        taskList={taskList}
        input={input}
        deleteItem={deleteItem}
        updateList={updateList}
      />
    </div>
  );
}
