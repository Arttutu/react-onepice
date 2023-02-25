
import CampoTexto from '../CampoTexto/CampoText'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import  Botao from '../Botao/Botao'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Chapeus de palha',
        'Piratas da Fera',
        'Piratas do ruivo',
        'piratas do coração',
    ]
    const aoSalvar = (e) =>{
        e.preventDefault()        
        console.log('formulario foi submetido')
    }
    return (
        <section className="formulario">
            <div className="container mt-5 p-5">
                <form onSubmit={aoSalvar}>
                    <h2 className='text-center mb-5'>Preencha os dados para criar o card da tripulação</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                    <ListaSuspensa label="tripulação" itens={times}/>
                    <Botao >
                        criar card
                    </Botao>
                </form>
            </div>
        </section>
    )
}

export default Formulario