import React, {useContext} from 'react'
import '../css/CategoryDetail.css'
import {useParams} from 'react-router-dom'

import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function CategoryDetail({name, categoryId}) {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  console.log(name)

  // let params = useParams()
  // console.log(params)
  // let categoryId = (parseInt(params.categoryId))
  // console.log(categoryId)
//   let category = ''

//   categoryData.map((eachCategory) => {
//     let categoryName = eachCategory.name.toLowerCase().replace(/\s+/g, '')
//     if(name === categoryName){
//         category = eachCategory.name
//         console.log(category)
//     }
//     return category
// })

  return (
    <div className='categoryDetail'>
        <h1>{name}</h1>
        {listingData.map((eachListing, index) => {
          if (eachListing.category === categoryId) {
            let src = `http://localhost:8000${eachListing.mainPhoto}`
            return(
                <div className='productCardContainer' key={index}>
                    <img src={src} className='listingImages' alt='Product'/>
                    <h4 className='titleBanner'>{eachListing.title}</h4>
                </div>
            )
          }
        })}
    </div>
  )
}

export default CategoryDetail