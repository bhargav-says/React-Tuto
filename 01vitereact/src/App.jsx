import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
      <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>

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
