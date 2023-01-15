import React, {useContext} from 'react'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

import '../css/ShoppingCart.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

function ShoppingCart({visibility, products, onProductRemove, onQuantityChange, onClose}) {

    // let {categoryData} = useContext(CategoryContext)
    // let {listingData} = useContext(ListingContext)
    
    console.log(products)
  
    return (
    <div className='modal' style={{
        display: visibility
            ? 'block'
            : 'none'
    }}>
        <div className='shoppingCart'>
            <div className='header'>
                <h3>Shopping Cart</h3>
                <AiFillCloseCircle size={30} className='btn close-btn' onClick={onClose} />
            </div>
            <div className='cart-products'>
                {!products
                    ? <span className='empty-text'>Your Cart is Empty</span>
                    : <>{products.map((product) => {
                        let mainPhotoSrc = `http://localhost:8000${product.mainPhoto}`
                    
                        return (
                        <div className='cart-product' key={product.id}>
                            <img src={mainPhotoSrc} alt={product.title}/>
                            <div className='product-info'>
                                <h3>
                                    {product.title}
                                </h3>
                                <span className='product-price'>
                                    ${product.price * product.count}
                                </span>
                            </div>
                            <select 
                                className='count'
                                value={product.count}
                                onChange={(event) => {
                                    onQuantityChange(product.id, event.target.value)
                                }}
                            >
                                {
                                    [...Array(10).keys(),].map((number => {
                                        const num = number + 1
                                        return <option value={num} key={num}>{num}</option>
                                    }))
                                }
                            </select>
                            <RiDeleteBin6Line className='btn delete-btn' size={20} onClick={() => onProductRemove(product)} />
                        </div>)
                    })}</>
                }
                {products.length > 0 && (
                    <button className='btn checkout-btn'>
                        Proceed to Checkout
                    </button>
                )}
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart