import "./Canvas.scss";
import hey from  "../../Images/7.jpg"
import React from 'react';
import axios from 'axios';


let mosaicDiv = []
for(let i = 0; i < 400; i++ ){
    mosaicDiv.push(<div className="test"><img src={hey}/></div>)
    }

class Canvas extends React.Component{
    
    render(){
        return(
        <div className="canvas-main" >
           <div className="canvas-main__img" style={{ backgroundImage: `url(${hey})`}}> 
            {mosaicDiv.map((val) => {
                return(val)
            })}
           </div> 
        </div>  
        )
    }
}

export default Canvas;