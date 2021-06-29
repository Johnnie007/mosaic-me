import "./Canvas.scss";
import hey from  "../../Images/7.jpg";
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Head from "../Head/Head";
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

  if(image.length !== 0){
    let sumNum = 0;
   console.log(image)
   console.log(image.length)
  for(let i = 0; i < 400; i++){
    if(sumNum == image.length){
      sumNum = 0;
    }
    if(typeof image[sumNum].small === 'string'){
      mosaicDiv.push(<img className="test" crossOrigin="anonymous" src={image[sumNum].small}/>)
    }else if( typeof image[sumNum] === 'string'){
      mosaicDiv.push(<img className="test" id='upload' src={image[sumNum]}/>)
    }
    sumNum++
  }
  }

//   let generatePDF =() => {
//     var pdf = new jsPDF('p', 'pt', 'a4');
//   pdf.addHTML(document.body, function() {
//   pdf.save('web.pdf');
// });
// }


let generatePDF =() => {
  const input = document.querySelector(".canvas-main__img");
  html2canvas(input, {allowTaint: true, width:400, height:400})
    .then((canvas) => {
      console.log(canvas);
      const imgData = canvas.toDataURL("img/jpg");
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG',10,10);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
    //const input = document.querySelector(".canvas-main__img");
              
                


  let download = (event) => {
   // console.log(event)
    html2canvas(document.querySelector('.canvas-main__img'), {allowTaint: true, width:400, height:400})
    .then(canvas => {
   //  let image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
    // console.log(image);
    // window.location.href=image; 
    var link = document.createElement("a");
			document.body.appendChild(link);
			link.download = "html_image.png";
      
			link.href = canvas.toDataURL("image/png");
			link.target = '_blank';
			link.click();
  });
  }

  return(
    <>
    <Head/>
    <div className="canvas-main" >
      
      <div className="canvas-main__img" id="canvas-main__img" style={{ backgroundImage: `url(${props.main})`}}>
        {mosaicDiv.map((val) => {return(val)})}
      </div>
      
      <div className="canvas-main__button">
        
        <div className="canvas-main__download">
          <button className="canvas-main__download--btn" type="primary" onClick={download}>Download</button>
        </div>
        
        <div className="canvas-main__reset">
          <Link to='/upload'><button className="canvas-main__reset--btn" type="primary">Restart</button></Link>
        </div>
      </div>
  </div> 
  </> 
        )
}

export default Canvas;