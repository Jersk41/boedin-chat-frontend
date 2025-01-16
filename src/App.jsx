import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatBox from './components/ChatBox'

//import './App.css' 


export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
            <ChatBox />
    </div>
  )
}
