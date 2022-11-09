import React, {useContext} from 'react'
import ListingContext from '../context/ListingContext'

function ShopIndex() {

  let {listingData} = useContext(ListingContext)

  return (
    <div className='shopIndex'>
        Shop Index
    </div>
  )
}

export default ShopIndex