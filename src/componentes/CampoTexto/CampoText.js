
import './CampoTexto.css'


const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    const aoDigitar = function (e){
       props.aoAlterado(e.target.value)
    }
    return (
        <div className='texto mt-3'>
            <label className="form-label">{props.label}</label>
            <input value={props.valor} onChange={aoDigitar}  required={props.obrigatorio} type="text"  placeholder = {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto