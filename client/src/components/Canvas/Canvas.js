import "./Canvas.scss";
import hey from  "../../Images/7.jpg"
import React from 'react';
import axios from 'axios';


let mosaicDiv = []
for(let i = 0; i < 400; i++ ){
    mosaicDiv.push(<img className="test" src={hey}/>)
    }


class Canvas extends React.Component{
    
    render(){
        return(
        <div className="canvas-main" >
           {/* <div className="canvas-main__img" style={{ backgroundImage: `url(${hey})`}}> 
            {mosaicDiv.map((val) => {
                return(val)
            })}
           </div>  */}
           <canvas className="canvas-main__img" style={{ backgroundImage: `url(${hey})`}}>
           </canvas>
        </div>  
        )
    }
}

export default Canvas;