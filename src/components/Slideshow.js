import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function Slideshow() {

    const fadeImages = [
        {
            url: 'tableImage1.jpeg',
            caption: 'First Slide'
        },
        {
            url: 'tableImage2.jpeg',
            caption: 'Second Slide'
        },
        {
            url: 'tableImage3.jpeg',
            caption: 'Third Slide'
        },
        {
            url: 'tableImage4.jpeg',
            caption: 'Fourth Slide'
        },
        {
            url: 'tableImage5.jpeg',
            caption: 'Fifth Slide'
        },
        {
            url: 'tableImage6.jpeg',
            caption: 'Sixth Slide'
        },
      ];

  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img 
              src={fadeImage.url}
              id="slideshowImages" 
            />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow