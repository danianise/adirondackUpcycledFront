import React, {useContext} from 'react'
import '../css/CategoryDetail.css'
import {useParams} from 'react-router-dom'

import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function CategoryDetail() {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  let params = useParams()
  console.log(params)
  let categoryId = (parseInt(params.categoryId))
  console.log(categoryId)
  let category = ''

  categoryData.map((eachCategory) => {
    if(categoryId === eachCategory.id){
        category = eachCategory.name
        console.log(category)
    }
    return category
})

  return (
    <div className='categoryDetail'>
        <h1>{category}</h1>
        {listingData.map((eachListing, index) => {
            let src = `http://localhost:8000${eachListing.photo}`
            return(
                <div className='productCardContainer' key={index}>
                    <img src={src} className='listingImages' alt='Product'/>
                    <h4 className='titleBanner'>{eachListing.title}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryDetail