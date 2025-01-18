function Facts() {
    return (
        <section className="wow fadeIn" id="facts">
        <div className="container">
            <header className="section-header">
                <h3>Facts</h3>
                <p>Successfully Completed Projects</p>
            </header>
            <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">5</span>
                    <p>PHP</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">30</span>
                    <p>Magento 2.x and Magento 1.x (CE)</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">4</span>
                    <p>Magento 2.x (EE)</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">1</span>
                    <p>OneSite / Client Location</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Facts;