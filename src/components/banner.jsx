import bannerImg from "../images/illustration-working.svg"


export default function Banner () {
  

  return (
    <>
      <div  className="banner">
        <div className="banner_texts">
          <h1 className="banner_title">More than just shorter links</h1>
          <p className="banner_paragraph">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <h3 className="banner_buttom">Get Started</h3>
        </div>
        <div className="banner_img_container">
          <img className="banner_img" src={bannerImg}/>
        </div>
      </div> 
    </>
      
  )
}