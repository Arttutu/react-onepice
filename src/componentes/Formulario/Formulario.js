
import CampoTexto from '../CampoTexto/CampoText'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <div className="container mt-5 p-5">
                <form>
                    <h2 className='text-center'>Preencha os dados para criar o card da tripulação</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                </form>
            </div>
        </section>
    )
}

export default Formulario