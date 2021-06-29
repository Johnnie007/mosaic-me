import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import Canvas from "./components/Canvas/Canvas"
import {Route, Switch} from 'react-router-dom';
import React, {useState} from 'react';

function App() {

  let image = 'https://via.placeholder.com/400';
  const [main, setMain] = useState(image);
  const [pattern, setPattern] = useState([]);
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Header />}/>
        <Route path="/upload" render={() => <SideBar  updateMain={main => setMain(main)} updatePattern={pattern => setPattern(pattern)}/>}/>
        <Route path="/canvas" render={() => <Canvas main={main} pattern={pattern} />}/>
      </Switch>
    </div>
  )
}

export default App;
