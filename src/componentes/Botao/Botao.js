import './Botao.css'

const Botao = (props) => {

    return (
        <button className='botao mt-4'>{props.children}</button>
    )
}
export default Botao