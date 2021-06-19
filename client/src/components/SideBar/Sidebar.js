import './Sidebar.scss';
import React from 'react';
import axios from 'axios';

class Sidebar extends React.Component{

        state ={
            image: ''
        }
    
        onChange(e) {
            let files = e.target.files;
            let readFile = new FileReader();
            readFile.readAsDataURL(files[0]);

            readFile.onload=(e)=>{
                console.log(e.target.result)
                // create backend api to update and store image.
                const url = "";
                const uploadData = {file:e.target.result}
                return axios 
                .post(url, uploadData)
                .then(response=>{

                })
            }

        }
        

    render(){
        
        return(
        <div className="sidebar">
            <form className="sidebar__form">
                <div className="sidebar__search">
                    <input className="sidebar__search--input" type="text" placeholder="Search(optional)"/>
                </div>
                <div className="sidebar__upload">
                    <input type="file" placeholder="Upload" onChange={(e)=>this.onChange(e)} />
                </div>
                <div className="sidebar__button">
                    <div>
                        <input className="sidebar__button--btn" type="radio" name="type"/>
                        <label>Main</label>
                    </div>
                    <div>
                        <input className="sidebar__button--btn" type="radio" name="type"/>
                        <label>Pattern</label>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}
export default Sidebar;