import './index.css'

const SuggestionItem = props => {
  const {eachItem, updateSearch} = props
  const {suggestion} = eachItem

  const onClickArrow = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="heading">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
