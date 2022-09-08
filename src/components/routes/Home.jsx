import React from 'react'
import { useSelector } from 'react-redux'
import FilterCard from '../barFilter/FilterCard'
import CardHome from '../home/CardHome'
import './styles/home.css'

const Home = () => {

  const products = useSelector(state => state.products)

  return (
    <main className='home'>
      <FilterCard/>
      <div className='home__container-card'>
        {
          products?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home