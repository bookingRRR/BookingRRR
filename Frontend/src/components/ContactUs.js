import "./styles/contactUsStyles.css";

function ContactUs() {
  return (
    <section id="contactus-section">
      <div className="contactus-container">
        <h2>Contact Us!</h2>
        <p>
          {" "}
          Do not hesitate to get in touch should you have any further queries or
          concerns.
          <strong> We’ll reply back to you sooner than your crush does!</strong>
        </p>

        <div className="contacts-container">
          <div className="icon">
            <a href="mailto:booking.rrr101@gmail.com">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/booking.rrr"
            >
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
