<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState } from 'react'
import '../styles/App.css'
const App = () => {
    const [input,setinput]=useState('');
    const handlechange=(e)=>{
   console.log(e.target.value);
   const val=e.target.value;
   setinput(val);
    }
  return (
    <div className='app'>
<div className='textarea'>
{/* <input onChange={handlechange} className='Loading' type='text' placeholder='Type Here' /> */}
<textarea className='Loading' onChange={handlechange} type='text' placeholder='type here...' />
</div>
<div className='preview'>
{input}
</div>
    </div>
  )
}

export default App
