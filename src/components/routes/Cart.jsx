import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import './styles/cart.css'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState()
  const [priceTotal, setPriceTotal] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        const products = res.data.data.cart.products
        setCartProducts(products)
        const totalPrice = products.reduce((acc, cv) => {
          return Number(cv.price) * cv.productsInCart.quantity + acc
        }, 0)
        setPriceTotal(totalPrice)
      })
      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
        setPriceTotal(0)
      })
      .catch(err => console.log(err))
  }

  return (
    <section className='cart'>
      <h2 className='cart__title'>Cart</h2>
      <div className='cart__container-item'>
        {
          cartProducts?.map(product => (
            <ProductCartInfo
              key={product.id}
              product={product}
              getAllProductsCart={getAllProductsCart}
            />
          ))
        }
      </div>
      <hr className='cart__hr' />
      <footer className='cart__footer'>
        <span className='cart__total-global-label'>Total:</span>
        <p className='cart__total-global-value'>{priceTotal}</p>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart