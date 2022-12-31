import icon1 from '../images/icon-brand-recognition.svg'
import icon2 from '../images/icon-detailed-records.svg'
import icon3 from '../images/icon-fully-customizable.svg'

export default function Statistics () {
  

  return (
    <>
      <div className="statistics">
        <div className="statistics_texts">
          <h1 className="statistics_title">Advanced Statistics</h1>
          <p className="statistics_paragraph">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="statistics_cards">
          <div className="statistics_card">
            <div className="statistics_icons">
              <img src={icon1}/>
            </div>
            <h2 className="statistics_card_title">Brand Recognition</h2>
            <p className="statistics_card_paragraph">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div id="card2" className="statistics_card">
            <div className="statistics_icons">
              <img src={icon2}/>
            </div>
            <h2 className="statistics_card_title">Detailed Records</h2>
            <p className="statistics_card_paragraph">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div id="card3" className="statistics_card">
            <div className="statistics_icons">
              <img src={icon3}/>
            </div>
            <h1 className="statistics_card_title">Fully Customizable</h1>
            <p className="statistics_card_paragraph">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </>
      
  )
}