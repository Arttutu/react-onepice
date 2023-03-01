import Banner from "./componentes/Banner/Banner"
import Formulario from "./componentes/Formulario/Formulario"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
function App() {
  const [tripulacao, setTripulacao] = useState([])
  const aoNovoColobaradorAdicionado = (tripulacao) => {
    console.log(tripulacao)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        aTripulacaoCadastrada={(tripulacao) =>
          aoNovoColobaradorAdicionado(tripulacao)
        }
      />
    </div>
  )
}

export default App
