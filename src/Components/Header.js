function Header() {
    return (
        <header id="header">
    <div className="container-fluid">
        <div className="logo-left wow fadeInLeft">
            <a href="#intro"><img alt="Ravi Mule Logo" src="img/fav.png" title="Ravi Mule"/></a>
        </div>
        <div className="pull-left wow fadeInRight" id="logo">
            <h1><a className="scrollto" href="#intro">RaviMule</a></h1>
        </div>

        <nav id="nav-menu-container">
            <ul className="nav-menu">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">My Skills</a></li>
                <li><a href="#services">Work Experience</a></li>
                <li><a href="#facts">Facts</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li className="menu-has-children"><a href="/">Apps</a>
                    <ul>
                        <li><a href="app/ravi.apk"><i className="fa fa-android"></i> Android</a></li>
                        <li><a href="#footer"><i className="fa fa-apple"></i> Apple iOS</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
    )
}

export default Header;