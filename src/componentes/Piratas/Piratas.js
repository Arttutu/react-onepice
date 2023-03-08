import Tripulante from "../Tripulante/Tripulante"
import "./Piratas.css"
const piratas = (props) => {
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
            {props.tripulante.map((tripulante) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                <Tripulante
                  corFundo={props.corSecundaria}
                  key={tripulante.nome}
                  nome={tripulante.nome}
                  cargo={tripulante.cargo}
                  imagem={tripulante.cargo}
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
