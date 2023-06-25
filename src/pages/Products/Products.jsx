import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  // get id from url - react router 
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000)

  const [tempPrice, setTempPrice] = useState(0)

  const [sort, setSort] = useState(null)

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const [selectedSubCats, setSelectedSubCats] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    //add the checked sub categories to array
    //filter out the sub categories when removed
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))

  }
  console.log(selectedSubCats)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
          
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input 
              type="range" 
              min={0} 
              max={1000} 
              onChange={(e) => setTempPrice(e.target.value)}
            />
            <span>{tempPrice}</span>
          </div>
          <button onClick={(e) => setMaxPrice(tempPrice)}>Apply</button>
        </div>

        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input 
              type="radio" 
              id="asc" 
              value="asc" 
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Low to High)</label>            
          </div>
          <div className="inputItem">
            <input 
              type="radio" 
              id="desc" 
              value="desc" 
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (High to Low)</label>            
          </div>
        </div>
      </div>

      <div className="right">
        <img className='catImg' src="https://images.unsplash.com/photo-1491382825904-a4c6dca98e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products