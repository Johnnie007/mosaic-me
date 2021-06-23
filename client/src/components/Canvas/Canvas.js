import "./Canvas.scss";
import hey from  "../../Images/7.jpg";
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
//import html2canvas from 'html2canvas';

//generatePDF =() => {
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

  let generatePDF =() => {
                const input = document.querySelector(".canvas-main__img");
                html2canvas(input)
                  .then((canvas) => {
                    const imgData = canvas.toDataURL("img/jpg");
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'JPEG',0,0, 100, 100);
                    // pdf.output('dataurlnewwindow');
                    pdf.save("download.pdf");
                  });
                }


  // let download = (event) => {
  //   console.log(event)
  //   var cnvs = document.querySelector('.canvas-main__img');
  //   html2canvas(document.querySelector('.canvas-main__img')).then(canvas => {
  //     console.log(canvas);
  //     let image = canvas.toDataURL("image/png").replace("image/png","image/octer-stream");
  //    // console.log(image);
  //     window.location.href=image;
  // });
  //}

  return(
    <div className="canvas-main" >
      
      <div className="canvas-main__img" style={{ backgroundImage: `url(${props.main})`}}>
        {mosaicDiv.map((val) => {return(val)})}
      </div> 
      
      <div className="canvas-main__button">
        
        <div className="canvas-main__download">
          <button className="canvas-main__download--btn" type="primary" onClick={generatePDF}>Download as PDF</button>
        </div>
        
        <div className="canvas-main__reset">
          <Link to='/'><button className="canvas-main__reset--btn" type="primary">Restart</button></Link>
        </div>
      </div>
  </div>  
        )
}

export default Canvas;