import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  articles = [
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Annie Njanja",
      title:
        "Purple Elephant Ventures, Kenya's tourism-focused startup studio, raises $1M pre-seed funding",
      description:
        "The venture studio plans to build about four startups at the intersection of tourism, climate and technology, every year.",
      url: "https://techcrunch.com/2022/10/07/purple-elephant-ventures-kenyas-tourism-focused-startup-studio-raises-1m-pre-seed-funding/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/PEV-Team-Photo-Oct2022-min.jpg?resize=1200,800",
      publishedAt: "2022-10-07T07:32:52Z",
      content:
        "A Kenya-based venture studio with a focus on tourism, Purple Elephant Ventures (PEV), has raised $1 million pre-seed funding to build the next generation of startups that use technology to modernize … [+3720 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Catherine Shu",
      title:
        "SaaS platform klikit saves restaurant kitchens from “tablet hell”",
      description:
        "The proliferation of delivery services give customers many options, but means chaos for busy restaurants that need to manage orders across multiple apps and channels. Many kitchens handle this by juggling several devices at a time, one for each app. Klikit wa…",
      url: "https://techcrunch.com/2022/10/06/saas-platform-klikit-saves-restaurant-kitchens-from-tablet-hell/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/klikit-Founder_CEO-Photo.jpeg?resize=1200,808",
      publishedAt: "2022-10-07T01:45:27Z",
      content:
        "The proliferation of delivery services give customers many options, but means chaos for busy restaurants that need to manage orders across multiple apps and channels. Many kitchens handle this by jug… [+4753 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Kirsten Korosec",
      title:
        "Tesla Semi production begins with Pepsi getting the first deliveries",
      description:
        "Tesla CEO Elon Musk said production on its long-delayed Semi truck has started with the first deliveries beginning in December.",
      url: "https://techcrunch.com/2022/10/06/tesla-semi-production-begins-with-pepsi-getting-the-first-deliveries/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/Tesla-Semi-loading.jpg?resize=1200,1033",
      publishedAt: "2022-10-07T00:53:34Z",
      content:
        "Tesla CEO Elon Musk tweeted Thursday that production on its long-delayed all-electric semi truck has started with the first deliveries beginning in December.\r\nThe automaker introduced an all-electric… [+1547 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Connie Loizos",
      title:
        "As the market cools, aggressive Tiger Global looks to raise a fund that's half the size as its last",
      description:
        "Like a lot of investors having a lousy time of it, Tiger Global is pointing to its historic returns to raise a new fund.",
      url: "https://techcrunch.com/2022/10/06/as-the-market-cools-aggressive-tiger-global-looks-to-raise-a-fund-thats-half-the-size-as-its-last/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2018/05/200355497-001.jpg",
      publishedAt: "2022-10-06T23:33:24Z",
      content:
        "In recent years, assets under management at the investment firm Tiger Global have exploded. Now the firm is taking stock and winnowing down its operations, per a new investor letter first seen by Axi… [+4641 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Lucas Matney",
      title: "Did Kim Kardashian really deserve that crypto fine?",
      description:
        "This week was a weird one for crypto, reality TV superstar Kim Kardashian was one of the first celebrities to get an SEC fine for promoting a cryptocurrency in a social media #ad; we also had to about Dogecoin rallying on Elon’s re-commitment to the Twitter d…",
      url: "https://techcrunch.com/2022/10/06/did-kim-kardashian-really-deserve-that-crypto-fine/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/Kim-Kardashian-Headshot-e1664830753133.jpeg?resize=1200,717",
      publishedAt: "2022-10-06T23:27:52Z",
      content:
        "Image Credits: TechCrunch\r\nThis week was a weird one for crypto, reality TV superstar Kim Kardashian was one of the first celebrities to get an SEC fine for promoting a cryptocurrency in a social med… [+1548 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Natasha Mascarenhas",
      title:
        "Amazon has 365 days to pour $150 million into diverse check writers",
      description:
        "Amazon announced Amazon Catalytic Capital, a $150 million investment vehicle to back underrepresented investors in tech and their portfolios.",
      url: "https://techcrunch.com/2022/10/06/amazon-has-365-days-to-pour-150-million-into-diverse-check-writers/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/venture-economic-warfare.jpg?resize=1200,645",
      publishedAt: "2022-10-06T22:51:57Z",
      content:
        "Amazon announced yesterday the launch of Amazon Catalytic Capital, a $150 million commitment focused on investing in underrepresented builders in tech. The initiative, according to a release, will in… [+2209 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Amanda Silberling",
      title:
        "The Musk v. Twitter trial is temporarily on hold as proposed deal looms",
      description:
        "The highly anticipated trial will continue on as planned if Elon Musk and Twitter don't make a deal by October 28.",
      url: "https://techcrunch.com/2022/10/06/the-musk-v-twitter-trial-is-temporarily-on-hold-as-proposed-deal-looms/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/07/Musk_Twitter-e1658493595325.jpg?resize=1200,675",
      publishedAt: "2022-10-06T22:32:58Z",
      content:
        "Judge Kathaleen McCormick ruled that the Elon Musk vs. Twitter trial will be put on hold so that the two parties can work out a deal.\r\nEarlier this week, the Tesla and SpaceX CEO finally agreed to pa… [+1584 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Christine Hall",
      title:
        "Daily Crunch: Everything you wanted to know about Google Fall Event 2022 (but were afraid to ask)",
      description:
        "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
      url: "https://techcrunch.com/2022/10/06/daily-crunch-everything-you-wanted-to-know-about-google-fall-event-2022-but-were-afraid-to-ask/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/14-Google-Pixel-Watch-Lemongrass-Active-Skate-Park.jpg?resize=1200,800",
      publishedAt: "2022-10-06T20:43:02Z",
      content:
        "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nHi again! Wondering if you have a preference between Friday Eve, Pr… [+2830 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Amanda Silberling",
      title: "Elon Musk moves to kill the upcoming Twitter trial",
      description:
        "After Elon Musk agreed to buy Twitter after all, his legal team is now motioning for the court to cancel the upcoming trial with Twitter.",
      url: "https://techcrunch.com/2022/10/06/elon-musk-moves-to-kill-the-upcoming-twitter-trial/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg",
      publishedAt: "2022-10-06T19:37:23Z",
      content:
        "After Elon Musk agreed to buy Twitter after all, his legal team is now motioning for the court to cancel the upcoming trial with Twitter, slated to begin on October 17.\r\nBut, as Judge Kathaleen McCor… [+1668 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Lauren Simonds",
      title:
        "Meet the young turks of blockchain, DeFi and web3 exhibiting at TC Sessions: Crypto",
      description:
        "Announcing five of the standout startups exhibiting at TC Sessions: Crypto on November 17 in Miami.",
      url: "https://techcrunch.com/2022/10/06/meet-the-young-turks-of-blockchain-defi-and-web3-exhibiting-at-tc-sessions-crypto/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/07/TC22_Sessions_Crypto_Wordpress_Header_Image_1200x628-2.png",
      publishedAt: "2022-10-06T19:23:36Z",
      content:
        "Basketball isnt the only heat youll find in Miami, a city rapidly becoming known for its emerging tech development and investment in the hot crypto sector. Its why we chose it as the destination for … [+1927 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hi mai constructor");

    this.state = {
      articles: this.articles,
      loading: false,
    };
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
                  description={element.description.slice(0, 88)}
                  imageUrl={element["urlToImage"]}
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
