import Tripulante from "../Tripulante/Tripulante"
import "./Piratas.css"
const piratas = (props, tripulante) => {
  return (
    // rederização condicional com react
    props.tripulante.length > 0 && (
      <section className="piratas text-center">
        <div
          className="container"
          style={{ backgroundColor: props.corPrimaria }}
        >
          <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>

          <div className="row piratasTime">
            {props.tripulante.map((tripulante, indice) => (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                <Tripulante
                  corFundo={props.corSecundaria}
                  key={indice}
                  nome={tripulante.nome}
                  cargo={tripulante.cargo}
                  imagem={tripulante.imagem}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  )
}
export default piratas
