export default function Header() {
  return (
    <header className="header  mt-0 mt-lg-4">
      <section class="header-secondary ">
        <section className="container">
            <section class="header-social-media d-none d-lg-block">
            <ul>
              <li>
                <a
                  href=""
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-youtube icon"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i class="fa-brands fa-twitter icon"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i class="fa-brands fa-facebook icon"></i>
                </a>
              </li>

              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i class="fa-brands fa-instagram icon"></i>
                </a>
              </li>

              <li>
                <a href="Call us :+44 (0)10 2345 6789" title="Call uss ">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </section>

          <section class="header-site-controls">
            <ul>
              <li>
                <form action="/" class="header-search-form">
                  <input
                    type="text"
                    placeholder="Search "
                    name="Search"
                    class="header-search-input"
                  />
                  <button
                    type="submit"
                    title="Search"
                    class="header-search-btn"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </li>

              <li>
                <a href="" title="User">
                  <i class="fa-solid fa-user icon"></i>
                </a>
              </li>

              <li>
                <a href="" title="wishList">
                  <i class="fa-solid fa-heart icon"></i>
                </a>
              </li>

              <li>
                <a href="" title="bag">
                  <i class="fa-solid fa-bag-shopping icon"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>

      </section>

      <section class="header-primary">
        <nav class="nav-main container">
          <ul>
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
                Men's
              </a>
            </li>

            <li>
              <a href="" title="Women's">
                Women's
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
      </section>
    </header>
  );
}
