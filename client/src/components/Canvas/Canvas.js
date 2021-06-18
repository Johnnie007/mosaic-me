import "./Canvas.scss";
import hey from  "../../Images/7.jpg"
import React, {useRef} from 'react';


function Canvas (){

        return(
            <div className="canvas-main" >
                <div className="canvas-main__img"><img className="canvas-img" src={hey}/></div>   
        </div>
        
    )
}

export default Canvas;