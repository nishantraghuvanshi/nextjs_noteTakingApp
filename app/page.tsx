"use client";
import React,{ useState } from "react"


const Home=()=> {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]); 

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    setList([...list, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandle = (i) => {
    let temp= list
    temp.splice(i,1)
    setList([...temp])

  }
  let listitems = "No Tasks"
  if (list.length>0) {
    
    listitems = list.map((item, index) => {
      return (
        <li key={index} className="flex justify-between items-center">
          <div className='text-2xl font-bold'>{item.title}</div>
          <div className='text-lg'>{item.desc}</div>
          <button onClick={()=>{deleteHandle(index)}} className="bg-red-700 text-white mb-8 rounded-md h-10 w-20">Delete</button>
        </li>
      );
    });
  }

  return (
    <div>
      <div className='bg-black text-white font-bold text-2xl h-10 flex justify-center items-center'>
        My To-Do List
      </div>
      <form className="flex p-10 gap-4" onSubmit={submitHandle}>
        <input type="text" placeholder='title' onChange={(e)=>{setTitle(e.target.value)}} value={title} className='border-zinc-800 border-2 rounded-md w-1/4 h-10'/>
        <input type="text" placeholder='desc' onChange={(e)=>{setDesc(e.target.value)}} value={desc} className='border-zinc-800 border-2 rounded-md w-1/4'/>
        <button type="submit" className='bg-black text-white font-bold rounded-sm w-1/6'>Add</button>
      </form>
      <hr />
      <div className='bg-slate-400 w-100% text-white p-2'>
        <ul>
          {listitems}
        </ul>
        
      </div>
    </div>
  )
}


export default Home