import "./Canvas.scss";
import hey from  "../../Images/7.jpg"
import React from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';


let mosaicDiv = []
for(let i = 0; i < 400; i++ ){
    mosaicDiv.push(<img className="test" src={hey}/>)
    }


class Canvas extends React.Component{
        state={ 
        }

        generatePDF =() => {
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

    render(){
        return(
        <div className="canvas-main" >
           <div className="canvas-main__img" style={{ backgroundImage: `url(${hey})`}}> 
            {mosaicDiv.map((val) => {
                return(val)
            })}
           </div> 
        <button onClick={this.generatePDF} type="primary">Download as PDF</button>
        </div>  
        )
    }
}

export default Canvas;