import React from 'react'
import styles from './styles/filterCard.css'

const FilterCard = () => {
    
  return (
    <header>
        <form className='container__filter'>
            <input type="text" id='name' className='filter__input' placeholder='¿I can help you?'/>
            <button className='filter__btn'>
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
  )
}

export default FilterCard