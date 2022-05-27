import { createContext, useState } from "react"

export const ContextCart = createContext(null)

export default function CartContext({ children }){
  const [cart, setCart] = useState([])

  return (
    <ContextCart.Provider value={{cart, setCart}} >
      { children }
    </ContextCart.Provider>
  )
}