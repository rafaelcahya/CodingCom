import React, { useContext } from 'react'
import {NewsContext} from './NewsContext'
import NewsArticle from './NewsArticle'
import loading from '../../../asset/loading/loading.svg'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Footer from '../../major/Footer'

function News(props) {
    const { data } = useContext(NewsContext)
    console.log(data)
    
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="flex justify-center">
                <p className="text-center text-3xl font-semibold border-b-2 px-2 pb-2 border-black mb-20 mt-32 lg:mt-20 w-max">Latest Update</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {data
                    ? data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />
                        ))
                    : (
                        <div className="py-16 px-0 text-center">
                            <img src={loading} alt="" width="100"/>
                        </div>
                    )}
            </div>
            <Footer/>
        </>
    )
}

export default News
