import Tripulante from "../Tripulante/Tripulante"
import "./Piratas.css"
import hexToRgba from "hex-to-rgba"
const piratas = (props) => {
  return (
    // rederização condicional com react
    props.tripulante.length > 0 && (
      <section className="piratas text-center">
        <div
          className="container"
          style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}
        >
          <div className="row">
            <div className="col text-end mb-3">
              <input
                value={props.cor}
                type="color"
                className="input-color"
                onChange={(evento) =>
                  props.mudarCor(evento.target.value, props.id)
                }
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mb-5">
              <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            </div>
          </div>

          <div className="row piratasTime">
            {props.tripulante.map((tripulante, indice) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                  <Tripulante
                    corFundo={props.cor}
                    key={indice}
                    tripulante={tripulante}
                    nome={tripulante.nome}
                    cargo={tripulante.cargo}
                    imagem={tripulante.imagem}
                    aoDeletar={props.aoDeletar}
                    aoFavoritar={props.aoFavoritar}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  )
}
export default piratas
