// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placesList} = props
  const {name, imgUrl} = placesList
  return (
    <li>
      <img src={imgUrl} className="image" alt={name} />
      <p className="description">{name}</p>
    </li>
  )
}

export default DestinationItem
