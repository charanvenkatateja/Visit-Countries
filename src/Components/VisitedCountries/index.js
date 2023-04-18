import './index.css'

const VisitedCountries = props => {
  const {details, onAddItem, toggleId} = props
  const {id, name, isVisited} = details
  const buttonClassname = isVisited ? 'normal' : 'style'

  const onClickAddItem = () => {
    toggleId(id)
    onAddItem(id)
  }

  return (
    <li className="list-container">
      <p className="country-name">{name}</p>
      <button
        type="button"
        className={buttonClassname}
        onClick={onClickAddItem}
      >
        {isVisited ? 'Visited' : 'Visit'}
      </button>
    </li>
  )
}
export default VisitedCountries
