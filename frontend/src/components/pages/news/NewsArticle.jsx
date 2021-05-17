import React from 'react'
import styled from 'styled-components'
import Imageeee from '../../../asset/photo/news/image.png'

const News = styled.div`
    img{
        width: 100%;
        height: 200px;
        border-radius: 8px
    }
`;  

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
const formatTime = s => new Date(s).toLocaleTimeString();

function NewsArticle({data}) {
    return (
        <a href={data.url} target="_blank" rel="noreferrer" className="flex justify-center" style={{width: "375px"}}>
            <News className="news-box p-3 flex-1 flex flex-col justify-between rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition duration-200">
                <div className="mb-5">
                        <img src={data.urlToImage || Imageeee} alt=""/>
                </div>
                <span className="font-medium text-sm text-gray-500 py-1">{data.source.name}</span>
                <p className="font-semibold">{data.title}</p>
                <div className="flex justify-between mt-10">
                    <span className="font-medium text-xs text-gray-500 tracking-wider">{formatDate(data.publishedAt)}</span>
                    <span className="font-medium text-xs text-gray-500 tracking-wider">{formatTime(data.publishedAt)}</span>
                </div>
            </News>
        </a>
    )
}

export default NewsArticle
