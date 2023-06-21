import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            isNew: true,
            oldPrice: 50,
            price: 30
        }
    ];

  return (
    <div className='list'>
        {data?.map(item => (
            <Card item = {item} key={item.id} />
        ))}
    </div>
  )
}

export default List