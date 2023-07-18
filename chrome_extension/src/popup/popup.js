/*global chrome*/
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js'

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

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App/>, root)