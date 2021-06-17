import './Sidebar.scss';

function Sidebar(){
    return(
    <div className="sidebar">
        <form className="sidebar__form">
            <div className="sidebar__search">
                <input className="sidebar__search--input" type="text" placeholder="Search(optional)"/>
            </div>
            <div className="sidebar__upload">
                <input type="file" placeholder="Upload"/>
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

export default Sidebar;