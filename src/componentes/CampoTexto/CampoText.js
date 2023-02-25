import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` 
    return (
        <div className='texto mt-3'>
            <label className="form-label">{props.label}</label>
            <input required={props.obrigatorio} type="text"  placeholder = {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto