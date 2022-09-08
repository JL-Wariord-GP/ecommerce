import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './styles/productCartInfo.css'
import Swal from 'sweetalert2'

const ProductCartInfo = ({product, getAllProductsCart}) => {

  //! DELETE
  const handleDeleteProduct = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your record has been deleted.',
            'success'
          )
          const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
          axios.delete(URL, getConfig())
            .then(() => getAllProductsCart())
            .catch(err => console.log(err))
        } else if (
            result.dismiss === Swal.DismissReason.cancel
          ){
            Swal.fire(
              'Cancelled',
              'Your record has not been deleted',
              'error'
            )
          }
      })   
  }

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
      </header>
      <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>
      <span className='cart__quantity'>{product.productsInCart.quantity}</span>
      <footer className='cart__item-footer'>
        <span className='cart__total-label'>Price:</span>
        <p className='cart__total-number'>${product.price}</p>
      </footer>
    </article>
  )
}

export default ProductCartInfo