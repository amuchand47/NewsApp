import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0)
 
  
  const capitalizeFirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const  updateNews = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=${
      props.pageSize
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page
    }`;
    console.log(loading);
    setloading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    
  }

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - News Muzaffarpur`;
    updateNews(); // eslint-disable-next-line
  }, [])
  

  const fetchMoreData = async() => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${props.apiKey}&page=${
      page+1
    }`;
   
    setpage(page+1);
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);

    
  };

  
    return (
      
      < >

        <h1 className="text-center" style = {{ marginTop: "90px"}}>  Top News HeadLines from {capitalizeFirstletter(props.category)} Headlines </h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >

        <div className="container">

        
        <div className="row">
          { articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0, 50)}description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage? element["urlToImage"]
                      : "https://c1.wallpaperflare.com/preview/608/687/767/the-gap-message-alarm-breaking-news-news.jpg"
                  }
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
         </div>
         </div>
         </InfiniteScroll>  

      </>
  
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;

