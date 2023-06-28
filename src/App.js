/*global chrome*/
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu'

function App() {  
  const [loginCheck, setLoginCheck] = useState(false);
  
  function loginChangeHandler() {
    setLoginCheck(true);
  }

  useEffect(() => {
    chrome.storage.local.get(["loginCheck"], (res) => {
      setLoginCheck("loginCheck" in res ? res.loginCheck : false);
    })
  })

  return (
    <div className="App">
      {loginCheck ? <Menu /> : <Login onLoginChange={loginChangeHandler} />}
    </div>
  );
}

export default App;
