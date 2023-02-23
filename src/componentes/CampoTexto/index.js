import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div >
            <label class="form-label">{props.nome}</label>
            <input type="text" class="form-control" placeholder={props.placeholder}> </input>
        </div>
    )
}

export default CampoTexto