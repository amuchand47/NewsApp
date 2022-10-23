import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstletter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstletter(this.props.category)} - News Muzaffarpur`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${
      this.props.pageSize
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page
    }`;
    console.log(url);
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })

  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async() => {
    
    this.setState({page: this.state.page + 1 })

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page+1
    }`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
    
  };

  render() {
    return (
      
      < >

        <h1 className="text-center"> Top News HeadLines from {this.capitalizeFirstletter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">

        
        <div className="row">
          { this.state.articles.map((element) => {
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
}

export default News;
