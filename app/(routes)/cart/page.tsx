import { Suspense } from "react"
import CartContent from "./components/cart-content"
import Loading from "./loading"

const CartPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CartContent />
    </Suspense>
  )
}

export default CartPage