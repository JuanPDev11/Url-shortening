import menuH from "../images/bars-solid.svg"
import styled from 'styled-components'

export default function Button ({clicked, handleClick}) {
return(
	<>
	<MenuHamburguer>
		<img className="nav_icon_menu" src={menuH} onClick={handleClick}/>
	</MenuHamburguer>
	</>
	)
}

const MenuHamburguer = styled.div`
	.nav_icon_menu{
  		opacity: 1;
  		width: 25px;
  		cursor: pointer;
    	@media(min-width: 997px){
      		opacity: 0;
      		width: 0;
    	}
    }		
`