import "./CartCard.css";
import Logo from '../assets/images/1001.png'
import { useCart } from "../context/CardContext";

export const CartCard = ({product}) => {
  const {name, price, image} = product;
  const {removeFromCart} = useCart();

  const handleRemove=() =>{
    removeFromCart(product)
  }
  
  return (
      <div className="cartCard">
        <img src={Logo} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
  )
}
