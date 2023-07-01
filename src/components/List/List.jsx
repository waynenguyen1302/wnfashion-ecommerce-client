import React, { useEffect } from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort, catId, fetchAll }) => {
    // const { data, loading, error } = useFetch(
        // `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        //   (item) => `&[filters][sub_categories][id][$eq]=${item}`
        // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    //   );

    const url = fetchAll
    ? `/products?populate=*&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    : `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className='list'>        
        {loading ? "loading" :
        data?.map(item => (
            <Card item = {item} key={item.id} />
        ))}
    </div>
  )
}

export default List