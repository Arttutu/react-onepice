import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` 
    return (
        <div >
            <label className="form-label">{props.label}</label>
            <input type="text" className="form-control" placeholder = {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto