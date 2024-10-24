import { Routes,Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} end/>
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </>
  )
}
