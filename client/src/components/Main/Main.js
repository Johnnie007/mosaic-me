import React, {useEffect, useState} from 'react';
import Sidebar from '../SideBar/Sidebar';
import Canvas from '../Canvas/Canvas';
//import hey from '../../Images/7.jpg'

// class Main extends React.Component{

//     state ={
//         main: '',
//         pattern:[]
//     }
//     componentDidUpdate(){
//         console.log(this.state.main)
//         console.log(this.state.pattern)
//     }

//     render(){
//         return(
//             <div className="main">
//                 <Sidebar mainImg={this.state}/>
//                 <Canvas/>
//             </div>
//   )}
// }

function Main(){
    let image = 'https://via.placeholder.com/400';
    const [main, setMain] = useState(image);
    const [pattern, setPattern] = useState([]);

    useEffect(()=>{
      //  console.log(pattern)
     //   console.log('this is main'+ main)
    }, [pattern,main])

    return(
    <div className="main">
        <Sidebar updateMain={main => setMain(main)} updatePattern={pattern => setPattern(pattern)}/>
        <Canvas main={main} pattern={pattern}/>
    </div>
          )
}


export default Main;