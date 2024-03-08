import './promo.css';
import promoImg from './../../img/images/header-img.jpg';
const Promo = () => {
  return (
    <section className="promo">
      <div className="countainer">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">LET’S EXPLORE UNIQUE CLOTHES.</div>
            <div className="promo_description">Live for Influential and Innovative fashion!</div>
            <div className="promo_btn-wrapper">
              <a href="#!" className="promo_btn">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="promo_img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
