import React from 'react'
import style from './styles/purchaseCard.css'
const PurchaseCard = ({purchase}) => {

console.log(purchase);


  return (
    <header >
        <ul className='container__purchase-all-element'>
            <div className='container__purchase-li'>
                <li className='container__name-purchase' >{purchase.id}</li>
                <li className='container__name-purchase' >{purchase.cart.products[0]?.title}</li>
                <li className='container__name-purchase' >{purchase.createdAt}</li>
            </div>
        </ul>
    </header>
  )
}

export default PurchaseCard