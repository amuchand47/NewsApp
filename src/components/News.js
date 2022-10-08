import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  constructor() {    
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }


  async componentDidMount(){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cad510c1cfc448b4b5ca122567ac0125";
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState ( {
      articles :  parsedData.articles
    })

  }

  render() {

    console.log("render");
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

        </div>
      </div>
    );
  }
}

export default News;
