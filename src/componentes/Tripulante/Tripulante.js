import "./Tripulante.css"
const Tripulante = ({ nome, imagem, cargo, corFundo }) => {
  return (
    <div className="Tripulante">
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
