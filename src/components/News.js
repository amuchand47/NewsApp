import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  constructor() {    
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }


  async componentDidMount(){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&pageSize=20&category=business&apiKey=cad510c1cfc448b4b5ca122567ac0125&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState ( {
      articles :  parsedData.articles,
      totalResults : parsedData.totalResults 
    })

  }


  handleNextClick = async()=>{

    console.log("next");
    
    if(Math.ceil(this.state.totalResults/20)<this.state.page+1){

    }else{

    let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&category=business&apiKey=cad510c1cfc448b4b5ca122567ac0125&page=${this.state.page+1}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState(
      {
        articles :  parsedData.articles,
        page : this.state.page+1
      }
    )
    }
  }


  handlePrevClick = async()=>{

     console.log("prev");
     let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&category=business&apiKey=cad510c1cfc448b4b5ca122567ac0125&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState(
      {
        articles :  parsedData.articles,
        page : this.state.page-1
      }
    )

  }

  render() {


    return (
      <div className="container my-3">
        <h2> Top News HeadLines</h2>

        <div className="row">

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  
                  title={element.title.slice(0, 50)}
                  description={element.description?element.description.slice(0, 88):""}
                  imageUrl={element.urlToImage?element["urlToImage"]:"https://c1.wallpaperflare.com/preview/608/687/767/the-gap-message-alarm-breaking-news-news.jpg"}
                  newsUrl = {element.url}
                />
              </div>
            );
          })
          }

          <div className="container d-flex justify-content-between">

          <button disabled = {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prevoius</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

          
          </div>

        </div>
      </div>
    );
  }
}

export default News;
