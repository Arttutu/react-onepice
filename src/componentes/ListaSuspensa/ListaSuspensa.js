import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // Usando bastante o map para rederizar uma lista
    return (
        <div className='lista'>
            <label className='form-label mt-3'>{props.label}</label>
            <select className='form-select'>
                {props.itens.map (itens => {
                     return <option key={itens}>{itens}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa