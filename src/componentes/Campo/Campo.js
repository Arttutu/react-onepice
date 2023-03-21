import "./Campo.css"

const Campo = (props) => {
  const placeholderModificada = `${props.placeholder}...`
  const aoDigitar = function (e) {
    props.aoAlterado(e.target.value)
  }
  const type = props.type ? props.type : "text" // verifica se a prop "type" está definida, caso contrário define o tipo padrão como "text"
  return (
    <div className={`texto mt-3 texto-${type}`}>
      <label className="form-label">{props.label}</label>
      <input
        type={type}
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  )
}

export default Campo
