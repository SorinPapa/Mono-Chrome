import ProductTile from './catalog/product-tile';
import HomeInfo from './homepage/home-info';

export default function Main() {
  return (
    <main className="content">
      <section className="home-mobile-image mb-4 d-block d-lg-none">
        <img src="./images/banners/banner-sm.png" alt="Monochrome"></img>

        <a className="cta" href="" title="New in">
          New in
        </a>
      </section>

      <section className="container">
        <section className="home-catalog-preview ">
          <header className="home-catalog-title">
            <h1 className="d-block d-lg-none">Spring Collection</h1>
            <h1 className="d-none d-lg-block">New Stuff</h1>
          </header>

          <div className="d-lg-block d-none ">
            <section className="product-tiles">
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-around gap-3 mt-3 mb-4d-block d-lg-none ">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1 className="d-block d-lg-none">Best Reviewd</h1>
            <h1 className="d-none d-lg-block">Must Loved</h1>
          </header>

          <div className="d-lg-block d-none">
            <section className="product-tiles">
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-between d-block d-lg-none mt-3 mb-4">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
        </section>

        <HomeInfo></HomeInfo>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1>Men s</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles mobile d-flex justify-content-between d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-title">
            <h1>Women s</h1>
          </header>

          <div className="d-none d-lg-block">
            <section className="product-tiles">
              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>

              <ProductTile></ProductTile>
            </section>
          </div>

          <section className="product-tiles-mobile d-flex justify-content-between  d-block d-lg-none">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>

          <footer>
            <a href="" title="view all" className="cta">
              view all
            </a>
          </footer>
        </section>
      </section>
    </main>
  );
}
