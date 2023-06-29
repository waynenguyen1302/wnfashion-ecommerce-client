import React, { useEffect, useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { makeRequest } from "../../makeRequest";

const Products = () => {

  // get id from url - react router 
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000)

  const [tempPrice, setTempPrice] = useState(0)

  const [sort, setSort] = useState("asc")

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}`)

  const [selectedSubCats, setSelectedSubCats] = useState([])

  const [categoryImage, setCategoryImage] = useState('');

  useEffect(() => {
    const fetchCategoryImage = async () => {
      try {
        const res = await makeRequest.get(`/categories/${catId}?populate=*`);
        const categoryData = res.data;
        setCategoryImage(`${process.env.REACT_APP_UPLOAD_URL + categoryData.data?.attributes?.img?.data.attributes.url}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryImage();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    //add the checked sub categories to array
    //filter out the sub categories when removed
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))

  }
  

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
        {categoryImage && <img className='catImg' src={categoryImage} alt="Category" />}
        <List fetchAlll={false} catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
} 

export default Products