import {createContext, useState, useEffect} from 'react'

const ListingContext = createContext()

export default ListingContext;

export const ListingProvider = ({children}) => {

    const [listingData, setListingData] = useState([])

    useEffect(() => {
        fetch(
            process.env.REACT_APP_API_URL + 'listings/',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(data => setListingData(data))
    }, [])

    let contextData = {
        listingData:listingData
    }

    return(<>
        {}
        <ListingContext.Provider value={contextData}>
            {children}
        </ListingContext.Provider>
        </>)
}