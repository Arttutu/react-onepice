import { Fragment } from "react"
import "./Banner.css"

export const Banner = () => {
  // Usando o fragment para colocar um bloco de código
  return (
    <>
      {" "}
      <header className="banner">
        <img
          src="/imagens/banner.jpeg"
          alt="O banner principal da página do Organo"
        />
      </header>
    </>
  )
}
export default Banner
