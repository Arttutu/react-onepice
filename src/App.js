import Banner from "./componentes/Banner/Banner"
import Formulario from "./componentes/Formulario/Formulario"
import Piratas from "./componentes/Piratas/Piratas"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

function App() {
  const piratas = [
    {
      nome: "Chapeus de Palha",
      corPrimaria: "#660300",
      corSecundaria: "#e60800",
    },
    {
      nome: "Piratas da Fera",
      corPrimaria: "#4695EA",
      corSecundaria: "#003166",
    },
    {
      nome: "Piratas da BigMom",
      corPrimaria: "#EA46A0",
      corSecundaria: "#E6007E",
    },
    {
      nome: "piratas do Coração",
      corPrimaria: "#EAD146",
      corSecundaria: "#66580B",
    },
  ]

  const [tripulante, setTripulante] = useState([])
  const aoNovoColobaradorAdicionado = (tripulacao) => {
    debugger
    setTripulante([...tripulante, tripulacao])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeTripulacao={piratas.map((piratas) => piratas.nome)}
        aTripulacaoCadastrada={(tripulacao) =>
          aoNovoColobaradorAdicionado(tripulacao)
        }
      />
      {piratas.map((piratas) => (
        <Piratas
          key={piratas.nome}
          nome={piratas.nome}
          corPrimaria={piratas.corPrimaria}
          corSecundaria={piratas.corSecundaria}
          tripulante={tripulante.filter(
            (tripulante) => tripulante.tripulacao === piratas.nome
          )}
        />
      ))}
    </div>
  )
}

export default App
