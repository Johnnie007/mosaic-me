import './Sidebar.scss';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Head from "../Head/Head";

let inputData = '';
const apiKey = "&client_id=whVq7dM1_Kqd3kcvB_s334hifdSJLAU-nM69nsp_pRQ";  
const apiUrl = "https://api.unsplash.com/search/photos?per_page=400&query=";
const serpAPI = 'https://serpapi.com/search.json?q=';
const serpKey = '&tbm=isch&ijn=0&api_key=52007a365e1bbd82ab736993f65e4f48d8ef74b4fd899f00d146dc6c48231f3b';
     
function Sidebar(props){
/*This is the handle submit function that will send an axios request. */
    let handleSubmit = (event) => {
            event.preventDefault()
            console.log(event.target.main);
        }
/*This is the onChange function that will set input data for axios request*/
    let patternInputChange = (event) => {
         inputData = event.target.value;
         inputData = inputData.replace(' ', ',');
         axios
         .get(apiUrl+inputData+apiKey)
        .then(response => {
            console.log(response)
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
        <>
        <Head/>
    <div className="sidebar">
        <form className="sidebar__form" onSubmit={handleSubmit}> 
            
            <div className="header__description">
                <p className="header__description--p">Convert any image into Mosaic</p>
            </div>

            <div className="sidebar__upload">
                <p className="sidebar__upload--label">Choose your main image</p>
                <input className="sidebar__upload--input" type="file" placeholder="Upload" onChange={mainImg} name='main'/>
            </div>

            <div className="sidebar__search">
                <p className="Sidebar__search--label" >Search your Pattern Image:</p><input className="sidebar__search--input" type="text" placeholder="What do you love" name='pattern'onChange={patternInputChange} />
            
            <div className='button'>
               <Link to='/canvas'><input type="submit" value="submit"/></Link>
            </div>
            
            </div>

            
        </form>      
    </div>
    </>)   
}
export default Sidebar;