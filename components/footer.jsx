export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-inner container">
        <section className="footer-connect d-block d-lg-none">
          <div className="footer-newsletter">
            <h1>Let s connect</h1>

            <h2 >
              Be the first to receive exclusives offers
            </h2>

            <form action="">
              <label htmlFor="email" className="d-none d-lg-block">
                Sign up for our newsletter
              </label>

              <input
                className="footer-subscribe"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              ></input>
            </form>

            <button className="subscribe-button" type="submit" title="Submit">
              Submit
            </button>

            <h3>
              I agree with
              <a href=""> Privacy Policy </a>
              and i want to receive emails from Monochrome.
            </h3>
          </div>

          <div className="footer-social">
            <h1>We are highly likeable</h1>

            <ul className="mt-2 mt-lg-0">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-nav">
          <div className="footer-title d-block d-lg-none mt-4 mt-lg-0">
            <h1>How cand we help ?</h1>
          </div>

          <nav className="footer-nav-content mt-3 mt-lg-0">
            <ul>
              <li>
                <a href="" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="" title="Affiliates">
                  Affiliates
                </a>
              </li>

              <li>
                <a href="" title="Advertising">
                  Adverstising
                </a>
              </li>
            </ul>

            <div className="footer-nav-vertical-line d-block d-lg-none mt-1 mt-lg-0"></div>

            <ul>
              <li>
                <a href="" title="Style and fit" className="d-block d-lg-none">
                  Style and fit
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="Style and fit advice"
                  className="d-none d-lg-block"
                >
                  Style and fit advice
                </a>
              </li>

              <li>
                <a href="" title="Faqs">
                  Faqs
                </a>
              </li>

              <li>
                <a href="" title="Delivery">
                  Delivery
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="Exchanges and returns"
                  className="d-none d-lg-block"
                >
                  Exchanges and returns
                </a>
              </li>

              <li>
                <a href="" title="returns" className="d-block d-lg-none">
                  Returns
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-nav-terms d-block d-lg-none mt-5 mt-lg-0">
            <ul>
              <li>
                <h2>terms and conditions</h2>
              </li>

              <li>
                <h2>privacy and cookies</h2>
              </li>
            </ul>
          </section>
        </section>

        <section className="footer-contact container d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                Call us <br />
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="" title="Email customer care">
                Email customer care
              </a>
            </li>

            <li>
              <a href="" title="See mobile version">
                See mobile version
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
