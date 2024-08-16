import './Header.css'
import { Sonic } from './icons/Sonic'

function Hearder() {

  const iconBig = {


    width: "148px",
    height:"148px"
  }


  return (
    <div className ="header-container">
      
    <img className="coração_maneiro" src="public/imagens/farmarcia-logo-pq.png" alt = "fotos do sonic"/>
    <h1 className="home__pagina">Farmácia </h1>
    <h1 className="home__paginaDois">Home</h1>

    <h1 className="home__paginaDois">noticias</h1>


    </div>
  )
}

export default Hearder
