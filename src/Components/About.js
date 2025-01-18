function About() {
    return (
    <section id="about">
        <div className="container">
            <header className="section-header">
                <h3>About Me</h3>
                <p>A software developer with over 10+ years of experience in all phases of the software development life cycle (SDLC), specializing in conceptualizing business needs and translating them into viable technical solutions.<br/> Strengths include strong analytical skills, problem-solving abilities, team collaboration, rapid adaptation to new technologies, and a proven track record of development experience.</p>
            </header>
            <div className="row about-cols">
                <div className="col-md-6 wow fadeInUp">
                    <div className="about-col">
                        <div className="img">
                            <img alt="" className="img-fluid" src="img/about-mission.jpg"/>
                            <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                        </div>
                        <h2 className="title"><a href="/">My Mission</a></h2>
                        <p>
                            To achieve significant success in Magento development, I am always eager to learn new technologies such as React.js and Angular alongside Magento.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="about-col">
                        <div className="img">
                            <img alt="" className="img-fluid" src="img/about-plan.jpg" />
                            <div className="icon"><i className="ion-ios-list-outline"></i></div>
                        </div>
                        <h2 className="title"><a href="/">My Plan</a></h2>
                        <p>
                            I have completed <strong>M2 Professional Developer Certification</strong> and
                            planning to do <strong>Professional Developer Plus Certification </strong>
                            <img className="pro_dev" alt="pro dev" src="img/pro-dev-plus-2x.png"/>
                            very soon.
                        </p>
                    </div>
                </div>

            </div>
            <div className="text-center" id="call-to-action">
                <a className="cta-btn" href="resume/Ravi Mule - Senior Software Engineer-M2PD.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </div>
        </div>
    </section>
    )
}

export default About;