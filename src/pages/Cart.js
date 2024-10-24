
import { CartCard } from '../components/CartCard'
import { useCart } from '../context/CardContext'
import { useTitle } from '../hooks/useTitle'

export const Cart = () => {
    useTitle('Shopping Cart - Cart')
    const {cartList} = useCart();
                     
  return (
    <main>
    <section className="products">
      { cartList.map((product) => (
        <CartCard key={product.id} product={product} />
      )) }        
    </section>
  </main>
  )
}
