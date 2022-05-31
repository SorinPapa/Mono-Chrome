export default function ProductTile() {
  return (
    <article className="product-tile">
      <section className="product-tile-image">
        <picture>
          <a href="" title="Monochrome Watch">
            <img
              src="./images/productsMen/Recently Viewed Thumbnail 2-10.png"
              alt="Monochrome Watch"
            ></img>
          </a>
        </picture>

        <a href="" className="product-tile-wishlist" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
        </a>
      </section>
      <h1 className="product-tile-title">Monochrome</h1>

      <div className="product-tile-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
