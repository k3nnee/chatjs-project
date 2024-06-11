import { useState } from 'react'
import './App.css'
import AuthPage from "./Components/AuthPage"
import ChatsPage from "./Components/ChatsPage"

function App() {

  const [user, setUser] = useState();

  return (
    <>
      {!user ? <AuthPage onAuth = {setUser} /> : <ChatsPage user = {user}/>}
    </>
  )
}

export default App
