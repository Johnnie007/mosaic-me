import './Sidebar.scss';
import React from 'react';
import axios from 'axios';

let inputData = '';
const apiKey = "&client_id=whVq7dM1_Kqd3kcvB_s334hifdSJLAU-nM69nsp_pRQ";  
const apiUrl = "https://api.unsplash.com/search/photos?per_page=400&query=";
     
function Sidebar(props){
/*This is the handle submit function that will send an axios request. */
    let handleSubmit = (event) => {
            event.preventDefault()
            console.log(event.target.main);
            axios
         .get(apiUrl+inputData+apiKey)
        .then(response => {

            console.log(response.data.results)
            let array = response.data.results;

            if(!array){
                return console.warn('invalid');
            }else{
             const newArr = array.map((data) =>{
                return data.urls  
            })
            props.updatePattern(newArr)
        }
         })
        }
/*This is the onChange function that will set input data for axios request*/
    let patternInputChange = (event) => {
         inputData = event.target.value;
         inputData = inputData.replace(' ', ',');
        }
/*This is the function that will set the main function */
    let mainImg = event =>{
            event.preventDefault()
            let main = URL.createObjectURL(event.target.files[0])
            if(main){
                return props.updateMain(main)
            }else {
                let image = 'https://via.placeholder.com/400';
                return props.updateMain(image);
            }
            
        }
    return(
    <div className="sidebar">
        <form className="sidebar__form" onSubmit={handleSubmit}>
            
            <div className="sidebar__upload">
                <label className="sidebar__upload--label">Main Photo:</label>
                <input type="file" placeholder="Upload" onChange={mainImg} name='main'/>
            </div>

            <div className="sidebar__search">
                <label className="Sidebar__search--label" ><input className="sidebar__search--input" type="text" placeholder="Search(optional)" name='pattern'onChange={patternInputChange} /></label>
            </div>
            
            <div className='button'>
               <input type="submit" value="submit"/>
            </div>
        </form>      
    </div>)   
}
export default Sidebar;