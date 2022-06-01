export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <section className="header-secondary-inner d-flex justify-content-between container align-items-center">
          <h1 className="d-block d-lg-none">monochrome</h1>

          <div className="header-connect d-none d-lg-block">
            <ul className="header-social-media d-flex">
              <li>
                <a
                  href=""
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
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

              <li className="header-contact">
                <a href="Call us :+44 (0)10 2345 6789" title="Call uss ">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <ul className="d-flex">
              <li className="header-search d-none d-lg-block">
                <form>
                  <input type="text" placeholder="Search"></input>
                  <button type="submit" title="Search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>

              <li className="header-user-controls">
                <a href="" title="My Account">
                  <i className="fa-solid fa-user icon"></i>
                </a>
              </li>

              <li className="header-wishList-controls">
                <a href="" title="Wish List">
                  <i className="fa-solid fa-heart icon"></i>
                </a>
              </li>

              <li className="header-cart-controls">
                <a href="" title="Cart">
                  <i className="fa-solid fa-bag-shopping icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="header-primary">
        <div className="header-primary-inner container">
          <nav className="header-primary-nav d-none d-lg-block">
            <ul className="d-flex justify-content-between">
              <li>
                <a href="" title="New arrivals">
                  New arrivals
                </a>
              </li>

              <li>
                <a href="" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="" title="Men's">
                  Men s
                </a>
              </li>

              <li>
                <a href="" title="Women's">
                  Women s
                </a>
              </li>

              <li>
                <a href="" title="Accessories">
                  Accessories
                </a>
              </li>

              <li>
                <a href="" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-primary-mobile d-block d-lg-none d-flex justify-content-between align-items-center">
            <ul>
              <li>
                <a href="" title="Menu">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>

            <form>
              <input type="text" placeholder="Search"></input>
              <button type="submit" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}
