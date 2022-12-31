import { useEffect, useState } from "react";


const linksContainer = [];
const getLocalStorage = () => {
  const links = localStorage.getItem("links");
  if (links) {
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return []
  }
  
}




export default function Form () {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState('copy');
  

    const handleSubmit = (e) => {

      const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  }
      
    e.preventDefault()
    const dataKey = Date.now();
    linksContainer.push(<div className="form_table" key={dataKey} >
                          <p className="form_table_paragraph">{links.full_short_link}</p>
                          <button onClick={handleCopy} className="form_table_button">
                          {buttonText}
                          </button>
                        </div>)

    

    if (!text) {
      alert("Input is empty");
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        setLinks(data.result);
        setText("");
      }

      shortenLink();
    }
  }

  

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links]);
  

  return (
    <>
      <div className="links_container">
      <div className="form"> 
        <div className="form_container" onSubmit={handleSubmit}>
          <input className="form_imput_text" type="url" placeholder="     Shorten a link here..." value={text} onChange={(e) => setText(e.target.value)}/>
          <div id="error"></div>
          <input className="form_imput_submit" type="submit" value="Shorten It!" onClick={handleSubmit}/> 
        </div>
        <div>
          {linksContainer}
        </div>
      </div>
      </div>
    </>
      
  )
}