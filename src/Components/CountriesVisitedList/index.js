import './index.css'

const CountriesVisitedList = props => {
  const {visitDetails, onRemoveItem} = props
  const {id, name, imageUrl} = visitDetails
  const onclickRemove = () => {
    onRemoveItem(id)
  }
  return (
    <li className="list-visited-item">
      <img src={imageUrl} alt="thumbnail" className="thumb-img" />
      <div className="list-sub-container">
        <p className="list-para">{name}</p>
        <button type="button" className="list-button" onClick={onclickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountriesVisitedList
