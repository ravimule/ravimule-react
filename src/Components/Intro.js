function Intro () {
    return (
    <section id="intro">
    <div className="intro-container">
        <div className="carousel slide carousel-fade" data-ride="carousel" id="introCarousel">
            <ol className="carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="carousel-background"><img alt="" src="img/intro-carousel/1.jpg" /></div>
                    <div className="carousel-container">
                        <div className="carousel-content wow fadeInUp" data-wow-delay="0.1s">
                            <img alt="Ravi Mule" className="center main-img" src="img/ravi.jpg"/>
                            <h2>Ravikiran Ashokrao Mule</h2>
                            <p>Certified Magento Lead & Developer</p>
                            <a className="btn-get-started scrollto" href="#about">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" data-slide="prev" href="#introCarousel" role="button">
                <span aria-hidden="true" className="carousel-control-prev-icon ion-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" data-slide="next" href="#introCarousel" role="button">
                <span aria-hidden="true" className="carousel-control-next-icon ion-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
</section>
    )
}

export default Intro;