import React, {useContext} from 'react'
import '../css/CategoryDetail.css'
import {useParams} from 'react-router-dom'

import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'

function CategoryDetail({name, categoryId}) {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  console.log(name)

  let categoryHref = ''

  return (
    <div className='categoryDetail'>
        <h1>{name}</h1>
        {listingData.map((eachListing, index) => {
          let listingId = eachListing.id
          if (eachListing.category === categoryId) {
            categoryData.map((eachCategory) => {
              if (categoryId === eachCategory.id) {
                categoryHref=`${eachCategory.hrefName}/${listingId}`
              } 
            })

            let src = `http://localhost:8000${eachListing.mainPhoto}`
            
            return(
                <div className='productCardContainer' key={index}>
                    <a href={categoryHref}>
                      <img src={src} className='listingImages' alt='Product'/>
                      <h4 className='titleBanner'>{eachListing.title}</h4>
                    </a>
                </div>
            )
          }
        })}
    </div>
  )
}

export default CategoryDetail