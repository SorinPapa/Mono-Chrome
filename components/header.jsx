export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <section className="header-secondary-inner d-flex justify-content-between container">
          <h1 className="d-block d-lg-none">Monochrome</h1>

          <div className="header-connect d-none d-lg-block">
            <ul className="header-social-media d-flex">
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
          </div>

          <div className="header-controls container">
            <ul className="header-search d-flex justify-content-between">
              <li className="d-none d-lg-block">
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
          </div>
        </section>
      </section>

      <section className="header-primary"></section>
    </header>
  );
}
