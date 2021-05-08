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
            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-lg" style={{backgroundColor: "#2c2f33"}}>Join us</a>
            </section>
            <Footer/>
        </>
    )
}

export default News
