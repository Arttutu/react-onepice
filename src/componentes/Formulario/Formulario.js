
import CampoTexto from '../CampoTexto/CampoText'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Chapeus de palha',
        'Piratas da Fera',
        'Piratas do ruivo',
        'piratas do coração',
    


    ]
    return (
        <section className="formulario">
            <div className="container mt-5 p-5">
                <form>
                    <h2 className='text-center'>Preencha os dados para criar o card da tripulação</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                    <ListaSuspensa label="tripulação" itens={times}/>
                </form>
            </div>
        </section>
    )
}

export default Formulario