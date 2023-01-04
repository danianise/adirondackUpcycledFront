import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function ListingDetail() {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  let params = useParams()
  let listingId = params.listingId
  console.log(listingId)

  let fadeImages = []

  return (
    <div>
      {listingData.map((eachListing) => {
        console.log(eachListing.id)

        if (parseInt(listingId) === eachListing.id){
          let mainPhotoSrc = `http://localhost:8000${eachListing.mainPhoto}`
          fadeImages.push(mainPhotoSrc)

          if (eachListing.photo1){
            let photo1Src = `http://localhost:8000${eachListing.photo1}`
            fadeImages.push(photo1Src)
          }

          if (eachListing.photo2){
            let photo2Src = `http://localhost:8000${eachListing.photo2}`
            fadeImages.push(photo2Src)
          }

          if (eachListing.photo3){
            let photo3Src = `http://localhost:8000${eachListing.photo3}`
            fadeImages.push(photo3Src)
          }

          if (eachListing.photo4){
            let photo4Src = `http://localhost:8000${eachListing.photo4}`
            fadeImages.push(photo4Src)
          }

          if (eachListing.photo5){
            let photo5Src = `http://localhost:8000${eachListing.photo5}`
            fadeImages.push(photo5Src)
          }
          
          if (fadeImages.length===1){
            return (
              <div className="listingDetail">
                <img 
                  src={fadeImages[0]}
                  className="slideshowImages singleListingImage"
                />
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          } else {
            return (
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>${eachListing.price}</h4>
                <div className="slide-container" id="slide-container-listing-detail">
                  <Fade indicators={true} canSwipe={true}>
                    {fadeImages.map((fadeImage, index) => (
                      <div className="each-fade" key={index}>
                        <div className="image-container">
                          <img 
                          src={fadeImage} 
                          className="slideshowImages" 
                        />
                        </div>
                      </div>
                    ))}
                  </Fade>
                </div>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          }
          
        }
      })}

    </div>
  )
}

export default ListingDetail