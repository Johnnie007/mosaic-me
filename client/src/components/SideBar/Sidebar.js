
function Sidebar(){
    return(
        <div>
            <div className="main">
                <div className="sidebar">
                <form>
                    <div className="sidebar__search">
                        <input type="text" placeholder="Search(optional)"/>
                        
                    </div>
                    <div className="sidebar__search">
                        <input type="file" placeholder="Upload"/>
                    </div>
                    <div className="sidebar__button">
                        <input type="radio"/>
                        <label>Main</label>
                        <input type="radio"/>
                        <label>Pattern</label>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;