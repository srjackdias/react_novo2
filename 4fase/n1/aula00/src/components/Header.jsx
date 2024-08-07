import './Header.css'
import { Sonic } from './icons/Sonic'

function Hearder() {

  const iconBig = {


    width: "148px",
    height:"148px"
  }


  return (
    <div className ="header-container">
      
    <h1>Página bonita</h1>
    <Sonic style={iconBig}/>
    </div>
  )
}

export default Hearder
