import icon1 from '../images/logo1.svg'
import icon2 from '../images/icon-facebook.svg'
import icon3 from '../images/icon-twitter.svg'
import icon4 from '../images/icon-pinterest.svg'
import icon5 from '../images/icon-instagram.svg'

export default function Footer () {
  

  return (
    <>
      <div className="footer">
        <div className="footer_column">
          <img className="footer_logo" src={icon1}/>
        </div>
        <div className="footer_column">
          <h2 className="footer_item_title">Features</h2>
          <h2 className="footer_item">Link Shortening</h2>
          <h2 className="footer_item">Branded Links</h2>
          <h2 className="footer_item">Analytics</h2>
        </div>
        <div className="footer_column">
          <h2 className="footer_item_title">Resources</h2>
          <h2 className="footer_item">Blog</h2>
          <h2 className="footer_item">Developers</h2>
          <h2 className="footer_item">Support</h2>
        </div>
        <div className="footer_column">
          <h2 className="footer_item_title">Company</h2>
          <h2 className="footer_item">About</h2>
          <h2 className="footer_item">Our Team</h2>
          <h2 className="footer_item">Careers</h2>
          <h2 className="footer_item">Contact</h2>
        </div>
        <div className="footer_column_icons">
          <img className="footer_icon" src={icon2}/>
          <img className="footer_icon" src={icon3}/>
          <img className="footer_icon" src={icon4}/>
          <img className="footer_icon" src={icon5}/>
        </div>
      </div>
      <div class="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://www.linkedin.com/in/juan-pablo-lucumi-medina-169659215/?originalSubdomain=co">Juan Lucumi Medina</a>.</div>
    </>
      
  )
}