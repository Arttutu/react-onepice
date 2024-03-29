import Campo from "../Campo/Campo"
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
      <div className="container mt-5 ">
        <div className="row d-flex align-itens-center">
          <div className=" col-sm-12 col-md-6">
            <form onSubmit={aoSalvar} className="p-5">
              <h2 className="text-center mb-5">
                Preencha os dados para criar o card da tripulação
              </h2>
              <Campo
                obrigatorio
                label="Nome"
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={(valor) => setNome(valor)}
              />
              <Campo
                obrigatorio
                label="Cargo"
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={(valor) => setCargo(valor)}
              />
              <Campo
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
              <Botao>Criar card</Botao>
            </form>
          </div>
          <div className=" col-sm-12 col-md-6 mt-5">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                props.cadastrarPiratas({ nome: nomePiratas, cor: CorPirata })
              }}
              className="p-5"
            >
              <h2 className="text-center mb-5 ">
                Preencha os dados para criar um Novo Time
              </h2>
              <Campo
                obrigatorio
                label="Nome"
                placeholder="Digite o nome do time"
                valor={nomePiratas}
                aoAlterado={(valor) => setnomePiratas(valor)}
              />
              <Campo
                obrigatorio
                label="Cor"
                type="color"
                placeholder="Digite a cor do time"
                valor={CorPirata}
                aoAlterado={(valor) => setCorPirata(valor)}
              />
              <Botao>Criar um novo time</Botao>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formulario
