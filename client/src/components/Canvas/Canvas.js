import "./Canvas.scss";
import hey from  "../../Images/7.jpg"
import React from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';



  


// class Canvas extends React.Component{
//         state={ 
//         }

//         generatePDF =() => {
//             const input = document.querySelector(".canvas-main__img");
//             html2canvas(input)
//               .then((canvas) => {
//                 const imgData = canvas.toDataURL("img/jpg");
//                 const pdf = new jsPDF();
//                 pdf.addImage(imgData, 'JPEG',0,0, 100, 100);
//                 // pdf.output('dataurlnewwindow');
//                 pdf.save("download.pdf");
//               });
//             }

//     render(){
//         return(
//         <div className="canvas-main" >
//            <div className="canvas-main__img" style={{ backgroundImage: `url(${hey})`}}> 
//             {mosaicDiv.map((val) => {
//                 return(val)
//             })}
//            </div> 
//         <button onClick={this.generatePDF} type="primary">Download as PDF</button>
//         </div>  
//         )
//     }
// }

function Canvas(props){
  let mosaicDiv = [];
  // let test = props.pattern[0].raw;
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