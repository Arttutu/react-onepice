import Banner from "./componentes/Banner/Banner"
import Formulario from "./componentes/Formulario/Formulario"
import Piratas from "./componentes/Piratas/Piratas"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [piratas, setPiratas] = useState([
    {
      nome: "Chapeus de Palha",
      cor: "#e60800",
      id: uuidv4(),
    },
    {
      nome: "Piratas da Fera",
      cor: "#003166",
      id: uuidv4(),
    },
    {
      nome: "Piratas da BigMom",
      cor: "#E6007E",
      id: uuidv4(),
    },
    {
      nome: "Piratas do Coração",
      cor: "#66580B",
      id: uuidv4(),
    },
  ])
  const inicial = [
    {
      nome: "Luffy",
      cargo: "Capitão",
      imagem:
        "https://assets-prd.ignimgs.com/2022/08/17/1-monkey-d-luffy-1660778366362.jpeg",
      tripulacao: piratas[0].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Zoro",
      cargo: "Lutador",
      imagem:
        "https://i.pinimg.com/564x/6c/0b/25/6c0b252b8d6c90099f71b49c201c2f60.jpg",
      tripulacao: piratas[0].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Sanji",
      cargo: "Cozinheiro",
      imagem:
        "https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2023/02/sanji-one-piece-1024x683.webp",
      tripulacao: piratas[0].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Kaidou",
      cargo: "Capitão",
      imagem:
        "https://geekdama.com.br/wp-content/uploads/2022/05/one-piece-kaidou-postcover.jpg",
      tripulacao: piratas[1].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "King",
      cargo: "Incediário",
      imagem:
        "https://i.pinimg.com/736x/89/49/2e/89492e1f78087b431237a9c0cf502b09.jpg",
      tripulacao: piratas[1].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Queen",
      cargo: "A peste",
      imagem:
        "https://criticalhits.com.br/wp-content/uploads/2021/10/Queen.jpg",
      tripulacao: piratas[1].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "BigMom",
      cargo: "Capitão",
      imagem:
        "https://geekdama.com.br/wp-content/uploads/2022/10/one-piece-anime-big-mom-whole-cake-postcover.jpg",
      tripulacao: piratas[2].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Katakuri",
      cargo: "General da doçura",
      imagem: "https://pbs.twimg.com/media/FZfvTUvXEAAlbsY.jpg",
      tripulacao: piratas[2].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Cracker",
      cargo: "General da doçura",
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25002b55-2b45-4930-b51c-66cac4301588/ddx4n2s-b6b017f9-eb17-47bd-ab68-132a6d60d5aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1MDAyYjU1LTJiNDUtNDkzMC1iNTFjLTY2Y2FjNDMwMTU4OFwvZGR4NG4ycy1iNmIwMTdmOS1lYjE3LTQ3YmQtYWI2OC0xMzJhNmQ2MGQ1YWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9K6apeH5k0rPbt5GPtBeVHhmGYUKjoEJNpNyLTPG_AY",
      tripulacao: piratas[2].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Law",
      cargo: "Capitão",
      imagem:
        "https://i.pinimg.com/564x/c6/e4/38/c6e4388d71fcb5b8a42bf51a6913ea87.jpg",
      tripulacao: piratas[3].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Bepo",
      cargo: "Urso Falante",
      imagem:
        "https://i.pinimg.com/736x/ad/50/67/ad5067d672fd2450b2f82d1023f050a7.jpg",
      tripulacao: piratas[3].nome,
      id: uuidv4(),
      favorito: false,
    },
    {
      nome: "Penguin",
      cargo: "Pirata",
      imagem: "https://i1.sndcdn.com/artworks-000097986533-osyrbv-t500x500.jpg",
      tripulacao: piratas[3].nome,
      id: uuidv4(),
      favorito: false,
    },
    {},
  ]
  const [tripulante, setTripulante] = useState(inicial)
  function deletarTripulante(id) {
    setTripulante(tripulante.filter((tripulante) => tripulante.id !== id))
  }
  function mudarCorDoTime(cor, id) {
    setPiratas(
      piratas.map((piratas) => {
        if (piratas.id === id) {
          piratas.cor = cor
        }
        return piratas
      })
    )
  }
  function cadastrarPiratas(novoTime) {
    setPiratas([...piratas, { ...novoTime, id: uuidv4() }])
  }
  function resolverFavorito(id) {
    setTripulante(
      tripulante.map((tripulante) => {
        if (tripulante.id === id) {
          tripulante.favorito = !tripulante.favorito
        }
        return tripulante
      })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarPiratas={cadastrarPiratas}
        nomeTripulacao={piratas.map((piratas) => piratas.nome)}
        aTripulacaoCadastrada={(tripulacao) =>
          setTripulante([...tripulante, tripulacao])
        }
      />
      <section>
        {piratas.map((piratas, indice) => (
          <Piratas
            id={piratas.id}
            key={indice}
            nome={piratas.nome}
            cor={piratas.cor}
            tripulante={tripulante.filter(
              (tripulante) => tripulante.tripulacao === piratas.nome
            )}
            aoDeletar={deletarTripulante}
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
          />
        ))}
      </section>
    </div>
  )
}

export default App
