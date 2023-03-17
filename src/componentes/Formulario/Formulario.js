import CampoTexto from "../CampoTexto/CampoText"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import { useState } from "react"
import Botao from "../Botao/Botao"
import "./Formulario.css"

const Formulario = (props, piratas) => {
  // (valor, local que guarda)
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [tripulacao, setTripulacao] = useState("")
  const [nomePiratas, setnomePiratas] = useState("")
  const [CorPirata, setCorPirata] = useState("")

  const aoSalvar = (e) => {
    e.preventDefault()
    props.aTripulacaoCadastrada({
      nome,
      cargo,
      imagem,
      tripulacao,
    })
    setNome("")
    setCargo("")
    setImagem("")
    setTripulacao("")
  }
  return (
    <section className="formulario mb-5">
      <div className="container mt-5 p-5">
        <form onSubmit={aoSalvar}>
          <h2 className="text-center mb-5">
            Preencha os dados para criar o card da tripulação
          </h2>
          <CampoTexto
            obrigatorio
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <CampoTexto
            obrigatorio
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
            obrigatorio
            label="tripulação"
            itens={props.nomeTripulacao}
            valor={tripulacao}
            aoAlterado={(valor) => setTripulacao(valor)}
          />
          <Botao> Criar card</Botao>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            props.cadastrarPiratas({ nome: nomePiratas, cor: CorPirata })
          }}
        >
          <h2 className="text-center mb-5 mt-5">
            Preencha os dados para criar um Novo Time
          </h2>
          <CampoTexto
            obrigatorio
            label="Nome"
            placeholder="Digite o nome do time"
            valor={nomePiratas}
            aoAlterado={(valor) => setnomePiratas(valor)}
          />
          <CampoTexto
            obrigatorio
            label="Cor"
            placeholder="Digite a cor do time"
            valor={CorPirata}
            aoAlterado={(valor) => setCorPirata(valor)}
          />
          <Botao> Criar um novo time</Botao>
        </form>
      </div>
    </section>
  )
}

export default Formulario
