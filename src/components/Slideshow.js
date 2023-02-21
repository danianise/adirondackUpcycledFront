import React, {useContext} from 'react'
import CategoryContext from '../context/CategoryContext';
import ListingContext from '../context/ListingContext';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function Slideshow() {

    let {categoryData} = useContext(CategoryContext)
    let {listingData} = useContext(ListingContext)
    console.log(listingData)

    let fadeImages = []

    listingData.map((eachListing) => {
      // let src = process.env.CLOUDINARY_API_URL + `${eachListing.mainPhoto}`
      let src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.mainPhoto}`

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
    listingData.length === 0
  ? <>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </>
  : <>
    <div className="slide-container">
      <Fade indicators={true} canSwipe={true}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <a href={fadeImage.href}>
                <img 
                src={fadeImage.src} 
                className="slideshowImages" 
                />
              </a>
            </div>
          </div>
        ))}
      </Fade>
    </div>
    </>
  )
}

export default Slideshow