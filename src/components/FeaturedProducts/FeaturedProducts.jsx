import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            {type === 'featured' ? 
                <p>
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.
                </p> :
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            }
        </div>
        <div className="bottom">
            {   error ? "Something went wrong." :
                (loading ? 
                "Loading" 
                : data?.map(item => (
                    <Card item={item} key={item.id} />
                )))}
        </div>
    </div>
  )
}

export default FeaturedProducts