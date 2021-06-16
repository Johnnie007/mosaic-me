import React from 'react';
import Sidebar from '../SideBar/Sidebar';

class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Sidebar/>
            </div>
        )
    }
}

export default Main;