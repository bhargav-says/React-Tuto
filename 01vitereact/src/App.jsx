import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  const [sub , setSub] =useState(10)
  const [name,setname]=useState("")

 

    const handleSubmit = ()=>{

    
      setCount(count +1)
      
    }
    const handleSubmitt =()=>{
      if(sub<=0){
        setSub(0)
      }
      else{
       setSub(sub-1)
      }
    }
    const hann = (e)=>{

      const value = {name}
      setname(e.target.value)
    }

  return (
    <>
      <div>
     
        <Card name="bhargav" />
        <h1 className='bg-green-400'>Bhargav</h1>
       {/* <button onClick={handleSubmit}>cliuck{count}</button>
       <button onClick={handleSubmitt}>cliuck{sub}</button> */}
       <input placeholder='Enter you name' onChange={hann}></input>
       {name}

        </div>
    </>
  )
}

export default App
