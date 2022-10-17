import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${
      this.props.pageSize
    }&category=${this.props.category}&apiKey=399f6c86ba9f4e41bcdac7573691a64c&page=${
      this.state.page
    }`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })

  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
   this.setState({page: this.state.page + 1});
    this.updateNews();  
  };

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> Top News HeadLines</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element["urlToImage"]
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

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Prevoius
            </button>
            <button
              disabled={
                Math.ceil(this.state.totalResults / 20) < this.state.page + 1
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
