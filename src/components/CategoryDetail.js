import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'

import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function CategoryDetail() {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  let categoryId = useParams()
  let category = ''
  let src = ''

  categoryData.map((eachCategory) => {
    if(parseInt(categoryId.categoryId) === eachCategory.id){
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
                <div key={index}>
                    <img src={src} className='listingImages'/>
                    <h4>{eachListing.title}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryDetail