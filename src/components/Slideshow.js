import React, {useContext} from 'react'
import CategoryContext from '../context/CategoryContext';
import ListingContext from '../context/ListingContext';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function Slideshow() {

    let {categoryData} = useContext(CategoryContext)
    let {listingData} = useContext(ListingContext)

    let fadeImages = []
    let fadeListingUrls = []

    listingData.map((eachListing) => {
      let src = `http://localhost:8000${eachListing.mainPhoto}`

      categoryData.map((eachCategory) => {
        if (eachListing.category === eachCategory.id){
          let href = `shop/${eachCategory.hrefName}/${eachListing.id}`
          fadeImages.push({
            "src": src,
            "href": href
          })
        }
      })
    })

  return (

    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <a href={fadeImage.href}>
                <img 
                src={fadeImage.src} 
                id="slideshowImages" 
                />
              </a>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow