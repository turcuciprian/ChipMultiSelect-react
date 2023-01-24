import { useState } from 'react'
import './index.css'



import './App.css'
import ChipMultiSelect from './MultiSelect'

function App() {
  const [count, setCount] = useState(0)

  return (
    // center vertically and horizontally
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex w-[50%] h-[10%] border-dashed border-2 border-gray-600 p-10 items-center justify-center flex-col">
        <ChipMultiSelect title="Click to Open" optionsList={['one', 'two', 'three']} onItemChange={(index:number)=>console.log(index)} />
      </div>
    </div>
  )
}

export default App
