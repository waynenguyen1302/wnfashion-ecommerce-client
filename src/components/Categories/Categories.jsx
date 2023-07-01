import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
          <button>
            <Link className='link' to="/categories/5">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" alt="" />
          <button>
            <Link to="/categories/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.unsplash.com/photo-1509755512670-9e7af886e7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80" alt="" />
          <button>
            <Link to="/categories/6" className="link">
              New Arrival
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80" alt="" />
              <button>
                <Link to="/categories/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.unsplash.com/photo-1589363360147-4f2d51541551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="" />
              <button>
                <Link to="/categories/7" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <img src="https://images.unsplash.com/photo-1498674202614-ac0172c6c61a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
            <button>
              <Link to="/categories/3" className="link">
                Children
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category