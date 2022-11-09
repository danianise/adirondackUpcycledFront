import {createContext, useState, useEffect} from 'react'

const CategoryContext = createContext()

export default CategoryContext;

export const CategoryProvider = ({children}) => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch(
            process.env.REACT_APP_API_URL + 'categories/',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(data => setCategoryData(data))
    }, [])

    let contextData = {
        categoryData:categoryData
    }

    return(<>
        {}
        <CategoryContext.Provider value={contextData}>
            {children}
        </CategoryContext.Provider>
        </>)
}