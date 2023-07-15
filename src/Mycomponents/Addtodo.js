 import React, { useState } from 'react'
 export const Addtodo = ({addtodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setdesc] = useState("");
    const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc)
      {
        alert("Title or Description cannot be blank")
      }
      else{
      addtodo(title,desc);
      setTitle("");
      setdesc("");
      }
    }
   return (
     <div className=' text-center container my-3'>
        <h3>ADD A TODO</h3>
       <form onSubmit={submit}>
  <div class="mb-3">
    <label for="etitle" className="form-label">TODO Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="desc" className="form-label">TODO Description</label>
    <input type="text" value ={desc} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success ">ADD</button>
</form>
     </div>
   )
   }