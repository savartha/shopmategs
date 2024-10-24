import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cardReducer";

const initialState = {
    total: 0,
    cartList: [],
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) =>{

    const[state,dispatch] = useReducer(cartReducer,initialState);

    const addToCart =(product) =>{
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList)
        dispatch({
            type:"ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart=(product)=>{
        state.cartList.map(c=>console.log(c.id))
        const updatedCartList = state.cartList.filter((current)=> current.id!==product.id)
        updateTotal(updatedCartList)
        dispatch(
            {
                type:"REMOVE_FROM_CART",
                payload:{
                    products:updatedCartList
                }
            }
        )
    }
    const updateTotal=(cartList)=>{
        let total =0;
        cartList.forEach(cartItem => total=total+cartItem.price);
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total
            }
        })
    }

    const value ={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart
    };


    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    );
}

export const useCart= () => {return  useContext(CartContext)};