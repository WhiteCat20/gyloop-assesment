import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={'bg-blue-600 grid place-content-center'}>
            <h1 className={'text-xl'}>TEST TEST</h1>
        </div>
    )
}

export default App
