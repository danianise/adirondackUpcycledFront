import React, {useContext} from 'react'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'
import PaymentButtons from './PaymentButtons'

import '../css/ShoppingCart.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

function ShoppingCart({visibility, productsInCart, onProductRemove, onQuantityChange, onClose}) {

    // let {categoryData} = useContext(CategoryContext)
    let {listingData} = useContext(ListingContext)
    
    // console.log(listingData)
    // console.log(productsInCart)
  
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
                {productsInCart.length === 0 || !productsInCart
                    ? <span className='empty-text'>Your Cart is Empty</span>
                    : <>{productsInCart.map((eachProduct) => {
                        // console.log(eachProduct.count)
                        let mainPhotoSrc = `https://res.cloudinary.com/di5yeg78v/${eachProduct.mainPhoto}`

                        return (
                        <div className='cart-product' key={eachProduct.id}>
                            <img src={mainPhotoSrc} alt={eachProduct.title}/>
                            <div className='product-info'>
                                <h3>
                                    {eachProduct.title}
                                </h3>
                                <span className='product-price'>
                                    ${eachProduct.price * eachProduct.count}
                                </span>
                            </div>
                            <select 
                                className='count'
                                value={eachProduct.count}
                                onChange={(event) => {
                                    onQuantityChange(eachProduct.id, event.target.value)
                                }}
                            >
                                {
                                    [...Array(eachProduct.quantity).keys(),].map((number => {
                                        const num = number + 1
                                        return <option value={num} key={num}>{num}</option>
                                    }))
                                }
                            </select>
                            {/* <RiDeleteBin6Line className='btn delete-btn' size={20} onClick={(eachProduct) => onProductRemove(eachProduct)} /> */}
                            <RiDeleteBin6Line className='btn delete-btn' size={20} onClick={() => onProductRemove(eachProduct)} />
                        </div>)
                    })}</>
                }
                {productsInCart.length > 0 && (
                    <button className='btn checkout-btn'>
                        Proceed to Checkout
                    </button>
                )}
            </div>
        </div>
        {/* <PaymentButtons/> */}
    </div>
  )
}

export default ShoppingCart