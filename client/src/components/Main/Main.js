import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Canvas from '../Canvas/Canvas'

class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Sidebar/>
                <Canvas />
            </div>
        )
    }
}

export default Main;