import React, { useContext } from 'react'
import {NewsContext} from './NewsContext'
import NewsArticle from './NewsArticle'

function News(props) {
    const { data } = useContext(NewsContext)
    console.log(data)
    
    return (
        <div>
            <h1>News App 👋</h1>
            <div>
                {data
                    ? data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                        ))
                    : "Loading"}
            </div>
        </div>
    )
}

export default News
