import "./Canvas.scss";
import hey from  "../../Images/7.jpg";
import React from 'react';
import axios from 'axios';
//import jsPDF from "jspdf";
//import html2canvas from 'html2canvas';

function Canvas(props){
  let mosaicDiv = [];
  let image = props.pattern;
  console.log(image)

  if(image.length !== 0){
    let sumNum = 0;
   console.log(image)
   console.log(image.length)
  for(let i = 0; i < 400; i++){
    if(sumNum == image.length){
      sumNum = 0;
    }
    if(image[sumNum] && image[sumNum].small){
      mosaicDiv.push(<img className="test" src={image[sumNum].small}/>)
    }
    sumNum++
  }
  }
  return(
    <div className="canvas-main" >
            <div className="canvas-main__img" style={{ backgroundImage: `url(${props.main})`}}>
                {mosaicDiv.map((val) => {return(val)})}
           </div> 
        <button type="primary">Download as PDF</button>
        </div>  
        )
}

export default Canvas;