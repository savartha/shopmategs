import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/1001.png'

import  './ProductCard.css'
import { useCart } from '../context/CardContext'

export const ProductCard = ({product}) => {
  const [isInCartList, setIsInCartList] = useState(false)

  const {cartList,addToCart,removeFromCart} = useCart();
  
  useEffect(()=>{
    const isInList = cartList.find(cartItem => cartItem.id===product.id);
    if(isInList){
      setIsInCartList(true)
    }else{
      setIsInCartList(false)
    }
  },[cartList,product.id])

  const handleAdd = () =>{
    addToCart(product)
  }
  const handleRemove = () =>{
    removeFromCart(product)
  }
  return (
    <div className='productCard'>
        <img src={Logo} alt={product.name}/>
        <p className='name'>{product.name}</p>
        <div className="action">
            <p>${product.price}</p>
            {isInCartList ? <button className='remove' onClick={handleRemove}>Remove</button> :<button onClick={handleAdd}>Add To Cart</button>}
      </div>
    </div>
  )
}
