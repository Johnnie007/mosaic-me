import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Canvas from '../Canvas/Canvas'

class Main extends React.Component{

    state ={
        main: '',
        pattern:[]
    }
    componentDidUpdate(){
        console.log(this.state.main)
        console.log(this.state.pattern)
    }
    render(){
        return(
            <div className="main">
                <Sidebar/>
                <Canvas/>
            </div>
        )
    }
}

export default Main;