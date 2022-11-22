import React, {useContext} from 'react'
// import { useParams } from 'react-router'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function ShopIndex() {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)
  // console.log(categoryData)

  return (
    <div className='shopIndex'>
      <ul>
        {categoryData.map((eachCategory, index) => {
            if(eachCategory) {
              let categoryName = eachCategory.name.replace(/\s/g, '').toLowerCase()
              // console.log(categoryName)
              let categoryHref = `/shop/${categoryName}`
              return (
                <a href={categoryHref} key={index}>
                  <li>
                    {eachCategory.name}
                  </li>
                </a>
              )
            }
          })}
      </ul>
    </div>
  )
}

export default ShopIndex