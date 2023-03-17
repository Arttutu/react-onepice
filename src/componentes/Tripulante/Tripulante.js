import { AiFillCloseCircle } from "react-icons/ai"
import "./Tripulante.css"
const Tripulante = ({
  nome,
  imagem,
  cargo,
  corFundo,
  aoDeletar,
  tripulante,
}) => {
  return (
    <div className="Tripulante">
      <AiFillCloseCircle
        size={30}
        color="white"
        className="deletar"
        onClick={() => aoDeletar(tripulante.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img className="img-fluid" src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}
export default Tripulante
