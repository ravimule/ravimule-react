function Contact() {
    return (
        <section className="section-bg wow fadeInUp" id="contact">
        <div className="container">
            <div className="section-header">
                <h3>Contact ME</h3>
            </div>
            <br/>
            <div className="row contact-info">
                <div className="col-md-4">
                    <div className="contact-address">
                        <i className="ion-ios-location-outline"></i>
                        <h3>Address</h3>
                        <address>Pune, Maharashtra</address>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-phone">
                        <i className="ion-ios-telephone-outline"></i>
                        <h3>Phone Number</h3>
                        <p><a href="tel:+919766210520">+91 97662 10520</a></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-email">
                        <i className="ion-ios-email-outline"></i>
                        <h3>Email</h3>
                        <p><a href="mailto:ravimule91@gmail.com">ravimule91@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="form">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage">Something went wrong. Please try again.</div>
                <form className="contactForm" method="post">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input className="form-control" data-msg="Please enter at least 4 chars" data-rule="minlen:4"
                                   id="name" name="name"
                                   placeholder="Your Name" type="text"/>
                            <div className="validation"></div>
                        </div>
                        <div className="form-group col-md-6">
                            <input className="form-control" data-msg="Please enter a valid email" data-rule="email"
                                   id="email" name="email"
                                   placeholder="Your Email" type="email"/>
                            <div className="validation"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" data-msg="Please enter at least 8 chars of subject"
                               data-rule="minlen:4" id="subject" name="subject"
                               placeholder="Subject" type="text"/>
                        <div className="validation"></div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" data-msg="Please write something for ME" data-rule="required"
                                  id="message" name="message"
                                  placeholder="Message" rows="5"></textarea>
                        <div className="validation"></div>
                    </div>
                    <div className="text-center">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}
export default Contact;