import "../App.css";
const Header = () => {
  return (
    <>

      <div className="fullScreenPrev">
        <div className="prevHeader">
          <div className="prevLogo">
            <a
              className="headerMarket"
              href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            >
              Envato Market
            </a>
          </div>
          <div className="prevActions">
            <div className="prevActionBuy">
              <a
                className="headerBuyNow e-btn--3d -color-primary"
                href="https://codecanyon.net/checkout/from_item/48826891?license=regular&support=bundle_6month"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
