import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            img2: "https://images.unsplash.com/photo-1591950838253-e2577979eb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            title: "Skirt Flower",
            desc: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences",
            isNew: true,
            oldPrice: 50,
            price: 30
        },
    ];

  return (
    <div className='cart'>
        <h1>Your Cart</h1>
        {data?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    {/* subString to limit long description */}
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' />
            </div>
        ))}  
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECK OUT</button> 
        <span className="reset">Empty Cart</span>     
    </div>
  )
}

export default Cart