import { AiFillCloseCircle } from "react-icons/ai"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import "./Tripulante.css"
const Tripulante = ({
  nome,
  imagem,
  cargo,
  corFundo,
  aoDeletar,
  tripulante,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(tripulante.id)
  }
  const propsfavorito = {
    size: 25,
    onClick: favoritar,
  }
  return (
    <div className="Tripulante">
      <AiFillCloseCircle
        size={30}
        color="#ffffff"
        className="deletar"
        onClick={() => aoDeletar(tripulante.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img className="img-fluid" src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {tripulante.favorito ? (
            <MdFavorite {...propsfavorito} color="#ff0000" />
          ) : (
            <MdFavoriteBorder {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  )
}
export default Tripulante
