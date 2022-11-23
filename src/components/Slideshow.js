import React, {useContext} from 'react'
import ListingContext from '../context/ListingContext';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function Slideshow() {

    let {listingData} = useContext(ListingContext)

    let fadeImages = []
    let fadeListingUrls = []

    listingData.map((eachListing) => {
      let src = `http://localhost:8000${eachListing.mainPhoto}`
      fadeImages.push(src)
    })

  return (

    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img 
              src={fadeImage} 
              id="slideshowImages" 
            />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow