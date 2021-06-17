import "./Header.scss";
function Header(){

    /* todo
        Find font
        make responsive
    */

    return(
        <header className="header">
                <div className="header__div">
                    <div className="header__title">
                        <h1 className="header__h1">Mosaic Me</h1>
                    </div>
                <div className="header__description">
                    <p>Mosaic Me is an app that will allow you to convert any image in a mosaic masterpiece. This app is simple to use! All you have to do is upload an image that you want to convert into a mosaic. Instead of using small pieces of colored stone, glass or ceramic to make your image. We will use other images as the pattern to make your masterpiece.</p>
                </div>
            </div>
        </header>
    )
};

export default Header;