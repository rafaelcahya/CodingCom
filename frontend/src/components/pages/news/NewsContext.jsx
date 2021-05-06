import React, {createContext, useEffect, useState} from "react";
import axios from "axios"

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const key = "87943c8a00c54cfd8f14f5e117b7da41"

    useEffect (() => {
        axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&language=en&pageSize=20&apiKey=${key}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [])

    return <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
}