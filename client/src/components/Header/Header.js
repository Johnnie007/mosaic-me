import "./Header.scss";
import {Link} from 'react-router-dom';

function Header(){

    /* todo
        Find font
        make responsive
    */

    return(
        <header className="header">
                <div className="header__div">
                    <div className="header__title">
                        <h1 className="header__h1" >Mosaic Me</h1>
                    </div>
                <div className="header__link">
                   <Link to='/upload'><button className="header__link--a">Click here to begin</button></Link>
                </div>
            </div>
        </header>
    )
};

export default Header;