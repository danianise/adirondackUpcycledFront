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
    listingData.length === 0
  ? <>
    <h4>UNDER CONSTRUCTION</h4><br />
    <div id="loader">
      <div class="ls-particles ls-part-1"></div>
      <div class="ls-particles ls-part-2"></div>
      <div class="ls-particles ls-part-3"></div>
      <div class="ls-particles ls-part-4"></div>
      <div class="ls-particles ls-part-5"></div>
      <div class="lightsaber ls-left ls-green"></div>
      <div class="lightsaber ls-right ls-red"></div>
    </div>
    <h5>please check back again soon</h5>
  </>
  : <>
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
    </>
  )
}

export default Slideshow