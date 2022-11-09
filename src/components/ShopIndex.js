import React, {useContext} from 'react'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function ShopIndex() {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)
  console.log(categoryData)

  return (
    <div className='shopIndex'>
      <ul>
        {categoryData.map((eachCategory) => {
          if(eachCategory) {
            return (
              <li>
              {eachCategory.name}
            </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default ShopIndex