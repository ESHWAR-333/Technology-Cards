import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={`${imgUrl}`} className="image" alt={title} />
    </li>
  )
}

export default CardItem
