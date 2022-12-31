export default function Row ({links, handleCopy, buttonText}) {
  

  return (
    <>
      <div className="form_table">
        <p className="form_table_paragraph">{links.full_short_link}</p>
        <button onClick={handleCopy} className="form_table_button">
        {buttonText}
        </button>
      </div>
    </>
      
  )
}