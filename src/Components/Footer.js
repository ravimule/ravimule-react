function Footer() {
    return (
        <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#intro">Home</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#about">About Me</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#services">Work Experience</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#facts">Facts</a></li>
                            <li><i className="ion-ios-arrow-right"></i> <a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-contact">
                        <h4>Contact ME</h4>
                        <p>
                            Legacy Fortune Exotica <br/>
                            Ravet, Pune 412101<br/>
                            India <br/>
                            <strong>Phone:</strong> +91 97662 10520<br/>
                            <strong>Email:</strong> ravimule91@gmail.com<br/>
                        </p>
                        <div className="social-links">
                            <a className="twitter" href="https://twitter.com/iamravimule" target="_blank" rel="noreferrer"><i
                                    className="fa fa-twitter"></i></a>
                            <a className="facebook" href="https://www.facebook.com/ravimule" target="_blank" rel="noreferrer"><i
                                    className="fa fa-facebook"></i></a>
                            <a className="instagram" href="https://www.instagram.com/ravi.mule" target="_blank" rel="noreferrer"><i
                                    className="fa fa-instagram"></i></a>
                            <a className="linkedin" href="https://www.linkedin.com/in/ravimule" target="_blank" rel="noreferrer"><i
                                    className="fa fa-linkedin"></i></a>
                            <a className="android" href="app/ravi.apk" target="_blank" title="Download Android App" rel="noreferrer"><i
                                    className="fa fa-android"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 footer-info">
                        <h4>Certifications</h4>
                        <p>
                            <a href="https://u.magento.com/certification/directory/dev/id/1822900/" target="_blank" rel="noreferrer">
                                <img src="img/pro_dev-l.png" alt="pro dev"/>
                            </a>
                            <strong>Aug 2020</strong>
                        </p>
                        <p className="adobe"><a href="https://www.youracclaim.com/users/ravimule" target="_blank" rel="noreferrer"><img src="img/adobe_certified_expert_magento.png" alt="adobe export logo"/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>Ravi Mule 2025</strong>
            </div>
        </div>
    </footer>
    )
}

export default Footer;