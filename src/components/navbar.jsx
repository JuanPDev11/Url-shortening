import React, {useState} from 'react'
import logo from "../images/logo.svg"
import Button from '../components/buttonMenu.jsx'
import styled from 'styled-components'



export default function Navbar () {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
    <NavContainer>
      <nav className="nav"> 
      <img className="nav_logo" src={logo}/>
        <div className={`nav_items ${clicked ? 'active' : ''}`}>
          <h2 className="nav_item">Features</h2>
          <h2 className="nav_item">Pricing</h2>
          <h2 className="nav_item">Resources</h2>
        </div>

        <div className={`nav_items ${clicked ? 'active' : ''}`}> 
          <h2 className="nav_item1">Login</h2>
          <h3 className="nav_item_login">Sign Up</h3>
        </div>
        <div>
          <Button clicked={clicked} handleClick={handleClick}/>
        </div>
      </nav>
      </NavContainer>
    </>
      
  )
}

const NavContainer = styled.div`
  .nav{
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  align-items: center;
  height: 60px;
  @media(min-width:997px){
      padding: 36px 150px;
      gap: 30px;
    }
  

  .nav_items{
  position: absolute;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 350px;
  height: 335px;
  background: hsl(257, 27%, 26%);
  top: 86px;
  text-align: center;
  border-radius: 10px;
  transition: all 1s;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px auto;

    
    @media(min-width:997px){
      opacity:1;
      position: initial;
      gap: 40px;
      display: flex;
      align-items: center;
      background: none;
      flex-direction: row;
      margin: none;
      align-content: center;
    }
    @media(min-width:1200px){
      opacity: 1;
      position: initial;
      gap: 40px;
      display: flex;
      align-items: center;
      background: none;
      flex-direction: row;
      margin: none;
      align-content: center;
    }
}

  .nav_items.active{
    opacity: 1;
  }
  .nav_logo{
  height: 30px;
  margin-top: 6px;
}

  .nav_item{
  
  font-weight: bold;
  font-size: 22px;
  z-index: 1;
  color: #fff;
  @media (min-width:997px){
      color: hsl(257, 7%, 63%);
      opacity: 1;
      font-size: 14px;
    }
} 

  .nav_item1 {
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  z-index: 1;
  margin-top: 66%;
  border-top: 1px solid #fff;
  padding-top: 36px;
  display: inline-block;
  width: 300px;
  margin: 58% auto auto;
  @media(min-width:997px){
      color: hsl(257, 7%, 63%);
      opacity: 1;
      font-size: 14px;
      border: none;
      margin: 0;
      padding: 0;
    }
}

  .nav_item_login{
  background: hsl(180, 66%, 49%);
  font-size: 14px;
  color: #fff;
  padding: 12px 21px;
  border: none;
  border-radius: 20px;
  margin: 0px auto auto;
    @media(min-width:997px){
      margin: 0;
      width: 100px;
    }
}
}



`