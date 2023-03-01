import CampoTexto from "../CampoTexto/CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import { useState } from "react"
import Botao from "../Botao/Botao"
import "./Formulario.css"

const Formulario = (props) => {
  const times = [
    "Chapeus de palha",
    "Piratas da Fera",
    "Piratas do ruivo",
    "piratas do coração",
  ]
  // (valor, local que guarda)
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [tripulacao, setTripulacao] = useState("")

  const aoSalvar = (e) => {
    e.preventDefault()
    props.aTripulacaoCadastrada({
      nome,
      cargo,
      imagem,
      tripulacao,
    })
  }
  return (
    <section className="formulario">
      <div className="container mt-5 p-5">
        <form onSubmit={aoSalvar}>
          <h2 className="text-center mb-5">
            Preencha os dados para criar o card da tripulação
          </h2>
          <CampoTexto
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={(valor) => setImagem(valor)}
          />
          <ListaSuspensa
            obrigatorio={true}
            label="tripulação"
            itens={times}
            valor={tripulacao}
            aoAlterado={(valor) => setTripulacao(valor)}
          />
          <Botao> Criar card</Botao>
        </form>
      </div>
    </section>
  )
}

export default Formulario
