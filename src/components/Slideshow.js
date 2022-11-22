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
    // console.log(fadeImages)
    // const fadeImages = [
    //     {
    //         url: 'tableImage1.jpeg',
    //         caption: 'First Slide'
    //     },
    //     {
    //         url: 'tableImage2.jpeg',
    //         caption: 'Second Slide'
    //     },
    //     {
    //         url: 'tableImage3.jpeg',
    //         caption: 'Third Slide'
    //     },
    //     {
    //         url: 'tableImage4.jpeg',
    //         caption: 'Fourth Slide'
    //     },
    //     {
    //         url: 'tableImage5.jpeg',
    //         caption: 'Fifth Slide'
    //     },
    //   ];

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