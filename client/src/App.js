import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import Canvas from "./components/Canvas/Canvas"
import {Route, Switch} from 'react-router-dom';
import React, {useState} from 'react';

function App() {

  let image = '';
  const [main, setMain] = useState(image);
  const [pattern, setPattern] = useState([]);
  const [hide, setHide] = useState('');

  console.log(hide)
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Header className="header__component" />}/>
        <Route path="/upload" render={() => <SideBar  updateMain={main => setMain(main)} updatePattern={pattern => setPattern(pattern)} updateHide={hide => setHide(hide)}/>}/>
        <Route path="/canvas" render={() => <Canvas main={main} pattern={pattern} hide={hide} />}/>
      </Switch>
    </div>
  )
}

export default App;
