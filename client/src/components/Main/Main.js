import React, {useEffect, useState} from 'react';
import Sidebar from '../SideBar/Sidebar';
import Canvas from '../Canvas/Canvas';


function Main(){
    let image = 'https://via.placeholder.com/400';
    const [main, setMain] = useState(image);
    const [pattern, setPattern] = useState([]);

    useEffect(()=>{
    }, [pattern,main])

    return(
    <div className="main">
        <Sidebar updateMain={main => setMain(main)} updatePattern={pattern => setPattern(pattern)}/>
        <Canvas main={main} pattern={pattern}/>
    </div>)
}


export default Main;