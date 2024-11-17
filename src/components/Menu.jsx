 
const Menu = ({mText, className}) => {
  return (
    <ul>
        <li className={`${className}`}>{mText}</li>
    </ul>
  )
}

export default Menu