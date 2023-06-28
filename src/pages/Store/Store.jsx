import React, { useState } from 'react'
import './Store.scss'
import List from '../../components/List/List'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  // get id from url - react router 
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000)

  const [tempPrice, setTempPrice] = useState(0)

  const [sort, setSort] = useState("asc")

  const {data, loading, error} = useFetch(`/categories`)

  const [selectedSubCats, setSelectedSubCats] = useState([])


  return (
    <div className='store'>
      <div className="left">
        <div className="filterItem">
          <h2>Shop By</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <Link className='link' to={`/products/${item.id}?populate=*`}>{item.attributes.title}</Link>
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
        <List 
          fetchAll={true}
          sort={sort}
          subCats={selectedSubCats}
          catId={catId}
          maxPrice={maxPrice}
        />
      </div>
    </div>
  )
}

export default Products