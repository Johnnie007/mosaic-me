import "./Header.scss";
import love from '../../Images/love2.jpg';
import hey from  "../../Images/7.jpg";
function Header(){

    /* todo
        Find font
        make responsive
    */

    return(
        <header className="header">
                <div className="header__div">
                    <div className="header__title" style={{ backgroundImage: `url(${love})`}}>
                        <h1 className="header__h1" >Mosaic Me</h1>
                    </div>
                <div className="header__link">
                    <a className="header__link--a">Click here to begin</a>
                </div>
            </div>
        </header>
    )
};

export default Header;