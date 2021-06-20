import './Sidebar.scss';
import React from 'react';
import axios from 'axios';

let inputData = '';

// class Sidebar extends React.Component{

    
//     apiKey = "&client_id=whVq7dM1_Kqd3kcvB_s334hifdSJLAU-nM69nsp_pRQ";
//     apiUrl = "https://api.unsplash.com/search/photos?per_page=400&query=";
//         state ={
//             main: '',
//             pattern:[]
//         }
    
//         componentDidUpdate(){
//         console.log(this.state.pattern)
//         console.log(this.state.main)
//         }

//         handleSubmit = (event) => {
//             event.preventDefault()
//         }
//         //This is the pattern change function update state.
//         patternInputChange = (event) => {
//             event.preventDefault()
//             inputData = event.target.value;
//            inputData = inputData.replace(' ', ',');
//            axios
//            .get(this.apiUrl+inputData+this.apiKey)
//            .then(response => {
//                this.setState({
//                    pattern: response.data.results,
//                 })
//            })
//         }
//         //This is the main image change function to update state.
//         mainImg = event =>{
//             event.preventDefault()
//             this.setState({
//                 main: URL.createObjectURL(event.target.files[0])
//             })
//         }

       

//     render(){
//         console.log(this.props)
//         return(
//         <div className="sidebar">
//             <form className="sidebar__form" onSubmit={this.handleSubmit}>
//                 <div className="sidebar__search">
//                     <label className="Sidebar__search--label" ><input className="sidebar__search--input" type="text" placeholder="Search(optional)" name='pattern'onChange={this.patternInputChange} /></label>
//                 </div>
//                 <div className="sidebar__upload">
//                     <label className="sidebar__upload--label">Main Photo:</label>
//                     <input type="file" placeholder="Upload" onChange={this.mainImg}/>
//                 </div>
//                 <div className='button'>
//                     <button>Submit</button>
//                 </div>
//             </form>

//             <img src={this.state.main}/>
            
//         </div>
//         )
//     }
// }
const apiKey = "&client_id=whVq7dM1_Kqd3kcvB_s334hifdSJLAU-nM69nsp_pRQ";  
const apiUrl = "https://api.unsplash.com/search/photos?per_page=400&query=";
     


function Sidebar(props){

    let patternInputChange = (event) => {
         inputData = event.target.value;
         inputData = inputData.replace(' ', ',');
         console.log(inputData);
         axios
         .get(apiUrl+inputData+apiKey)
        .then(response => {

            console.log(response.data.results)
            let array = response.data.results;
            let newArray = [];
            if(!array){
                return console.warn('invalid')
            }else
            array.map((data) =>{
               // console.log(data.urls)
                newArray.push(data.urls)
                return props.updatePattern(newArray) 
               
            })
         })
        }

    let mainImg = event =>{
            event.preventDefault()
            return props.updateMain(URL.createObjectURL(event.target.files[0]))
        }
    return(
    <div className="sidebar">
        <form className="sidebar__form" /*onSubmit={this.handleSubmit}*/>
            <div className="sidebar__search">
                <label className="Sidebar__search--label" ><input className="sidebar__search--input" type="text" placeholder="Search(optional)" name='pattern'onChange={patternInputChange} /></label>
            </div>
            <div className="sidebar__upload">
                <label className="sidebar__upload--label">Main Photo:</label>
                <input type="file" placeholder="Upload" onChange={mainImg}/>
            </div>
            <div className='button'>
                <button>Submit</button>
            </div>
        </form>
    {/* <img src={this.state.main}/> */}
            {console.log()}        
    </div>
                )   
                 
}
export default Sidebar;