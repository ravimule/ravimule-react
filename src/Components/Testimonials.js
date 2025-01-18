function Testimonials() {
    return (
        <section id="testimonials">
            <section className="testimonials section-bg wow fadeInUp" id="call-to-action">
                <div className="container">
                    <header className="section-header">
                        <h3>Testimonials</h3>
                    </header>
                    <div className="owl-carousel testimonials-carousel">
                        <div className="testimonial-item">
                            <img alt="laxman" className="testimonial-img" src="img/laxman.png"/>
                            <h3>Laxman More</h3>
                            <h4>Web Developer - Ruby on Rails Developer</h4>
                            <p>
                                <img alt="" className="quote-sign-left" src="img/quote-sign-left.png" />
                                Ravi is very passionate about developing web applications in php. He has very good knowledge
                                about web development.
                                <img alt="" className="quote-sign-right" src="img/quote-sign-right.png"/>
                            </p>
                        </div>

                        <div className="testimonial-item">
                        <img src="img/bhaurao.jpg" className="testimonial-img" alt="bhaurao"/>
                        <h3>Bhaurao Birajdar</h3>
                        <h4>Nodejs, PHP Developer</h4>
                        <p>
                            <img src="img/quote-sign-left.png" className="quote-sign-left" alt=""/>
                            Ravi is having very good knowledge on the Magento and PHP. We have worked together for some projects.
                            <img src="img/quote-sign-right.png" className="quote-sign-right" alt=""/>
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Testimonials;