import "./social.css"

function Socialmedia() {
  return (
    <div className="social-media">
      <h3 className="social-head">SOCIAL MEDIA
        <div className="line"></div>
      </h3>
      <div className="media">
        <div className="fb icon">
          <i className="fa-brands fa-facebook-f"></i>
          <p>10.5K</p>
          <p>Followers</p>
        </div>
        <div className="tw icon">
          <i className="fa-brands fa-twitter"></i>
          <p>5.1K</p>
          <p>Followers</p>
        </div>
        <div className="gp icon">
          <i className="fa-brands fa-google-plus-g"></i>
          <p>2.0K</p>
          <p>Followers</p>
        </div>
      </div>
      <div className="categories">
        <h3>CATEGORIES<div className="line" /></h3>
        <div className="categorie">
          <h4>LIFESTYLE</h4>
          <p>402</p>
        </div>
        <div className="categorie">
          <h4>FASHION</h4>
          <p>213</p>
        </div>
        <div className="categorie">
          <h4>TECHNOLOGY</h4>
          <p>311</p>
        </div>
        <div className="categorie">
          <h4>TRAVEL</h4>
          <p>56</p>
        </div>
        <div className="categorie">
          <h4>HEALTH</h4>
          <p>102</p>
        </div>
      </div>
    </div>
  )
}

export default Socialmedia