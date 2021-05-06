import React from 'react'
import styled from 'styled-components'
import Imageeee from '../../../asset/photo/news/image.png'

const News = styled.div`
    img{
        width: 200px;
        height: 150px
    }
`;  

function NewsArticle({data}) {
    return (
        <News>
            <div>
                { data.urlToImage !== 'null' ? 
                    <img src={data.urlToImage} alt="" />
                : 
                    <img src={Imageeee} alt="" />
                }  
            </div>
            <h1 className="news__title">{data.title}</h1>
            <p className="news__desc">{data.description}</p>
            <span className="news__author">{data.author}</span> <br />
            <span className="news__published">{data.publishedAt}</span>
            <span className="news__source">{data.source.name}</span>
        </News>
    )
}

export default NewsArticle
