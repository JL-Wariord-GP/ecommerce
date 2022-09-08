import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'
import style from '../purchases/styles/purchaseCard.css'
const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(error => console.log(error))
  }, [])
  
console.log(purchases);

  return (
    <div>

      <div className='container__purcharse'>
        {
          purchases?.map(purchase => (
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases