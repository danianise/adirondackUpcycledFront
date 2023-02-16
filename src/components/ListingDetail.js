import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import CategoryContext from '../context/CategoryContext'
import ListingContext from '../context/ListingContext'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'

function ListingDetail({addProductToCart, productsInCart}) {

  let {categoryData} = useContext(CategoryContext)
  let {listingData} = useContext(ListingContext)

  let params = useParams()
  let listingId = params.listingId
  // console.log(listingId)

  let fadeImages = []
  console.log(fadeImages)

  return (
    <div>
      {listingData.map((eachListing) => {

        let idsProductsInCart = []

        for(let i=0; i<productsInCart.length; i++){
          // console.log(productsInCart[i].id)
          idsProductsInCart.push(productsInCart[i].id)
          // console.log(`Products in cart indices:${indicesProductsInCart}`)
        }

        if (parseInt(listingId) === eachListing.id){
          let mainPhotoSrc = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.mainPhoto}`
          fadeImages.push(mainPhotoSrc)

          if (eachListing.photo1){
            let photo1Src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.photo1}`
            fadeImages.push(photo1Src)
          }

          if (eachListing.photo2){
            let photo2Src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.photo2}`
            fadeImages.push(photo2Src)
          }

          if (eachListing.photo3){
            let photo3Src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.photo3}`
            fadeImages.push(photo3Src)
          }

          if (eachListing.photo4){
            let photo4Src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.photo4}`
            fadeImages.push(photo4Src)
          }

          if (eachListing.photo5){
            let photo5Src = `https://res.cloudinary.com/di5yeg78v/` + `${eachListing.photo5}`
            fadeImages.push(photo5Src)
          }
          
          if (fadeImages.length===1 && eachListing.available === true && !idsProductsInCart.includes(eachListing.id)){
            return (
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button>
                </h4>
                <a href={fadeImages[0]} target='_blank'>
                  <img 
                    src={fadeImages[0]}
                    className="slideshowImages singleListingImage"
                  />
                </a>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          } else if(fadeImages.length===1 && eachListing.available === true && idsProductsInCart.includes(eachListing.id)){
            return(
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  {/* <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button> */}
                  <p style={{fontStyle: 'italic', fontSize: 'small'}}>Item added to Cart</p>
                </h4>
                <a href={fadeImages[0]} target='_blank'>
                  <img 
                    src={fadeImages[0]}
                    className="slideshowImages singleListingImage"
                  />
                </a>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          } else if(fadeImages.length>1 && eachListing.available===true && !idsProductsInCart.includes(eachListing.id)){
            return (
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button>
                </h4>
                <div className="slide-container" id="slide-container-listing-detail">
                  <Fade indicators={true} canSwipe={true}>
                    {fadeImages.map((fadeImage, index) => (
                      <div className="each-fade" key={index}>
                        <div className="image-container">
                          <a href={fadeImage} target='_blank'>
                            <img 
                            src={fadeImage} 
                            className="slideshowImages" 
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </Fade>
                </div>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          }else if(fadeImages.length>1 && eachListing.available===true && idsProductsInCart.includes(eachListing.id)){
            return (
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  {/* <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button> */}
                  <p style={{fontStyle: 'italic', fontSize: 'small'}}>Item added to Cart</p>
                </h4>
                <div className="slide-container" id="slide-container-listing-detail">
                  <Fade indicators={true} canSwipe={true}>
                    {fadeImages.map((fadeImage, index) => (
                      <div className="each-fade" key={index}>
                        <div className="image-container">

                          <a href={fadeImage} target='_blank'>
                            <img 
                            src={fadeImage} 
                            className="slideshowImages" 
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </Fade>
                </div>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          } else if(fadeImages.length===1 && eachListing.available === false){
            return(
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  {/* <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button> */}
                  <p style={{fontStyle: 'italic', fontSize: 'small'}}>Unavailable</p>
                </h4>
                <a href={fadeImages[0]} target='_blank'>
                  <img 
                    src={fadeImages[0]}
                    className="slideshowImages singleListingImage"
                  />
                </a>
                <p id='listingDescription'>{eachListing.description}</p>
              </div>
            )
          } else if(fadeImages.length>1 && eachListing.available === false){
            return (
              <div className="listingDetail">
                <h1>{eachListing.title}</h1>
                <h4>
                  ${eachListing.price}
                  {/* <button id='addToCartButton' onClick={() => addProductToCart(eachListing)}>Add to Cart</button> */}
                  <p style={{fontStyle: 'italic', fontSize: 'small'}}>Unavailable</p>
                </h4>
                <div className="slide-container" id="slide-container-listing-detail">
                  <Fade indicators={true} canSwipe={true}>
                    {fadeImages.map((fadeImage, index) => (
                      <div className="each-fade" key={index}>
                        <div className="image-container">
                          <a href={fadeImage} target='_blank'>
                            <img 
                              src={fadeImage} 
                              className="slideshowImages" 
                            />
                          </a>
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