import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
  // Usando bastante o map para rederizar uma lista
  return (
    <div className="lista">
      <label className="form-label mt-3">{props.label}</label>
      <select
        value={props.valor}
        onChange={(e) => props.aoAlterado(e.target.value)}
        required={props.obrigatorio}
        className="form-select"
      >
        <option value=""></option>
        {props.itens.map((itens) => {
          return <option key={itens}>{itens}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa
