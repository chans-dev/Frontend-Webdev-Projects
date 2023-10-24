import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "derrek.lee@futurenet.com (Derrek Lee)",
      "title": "Google I/O 2023: All of the biggest announcements",
      "description": "Now that Google I/O 2023 has commenced, we want to highlight some of the biggest announcements from the event.",
      "url": "https://www.androidcentral.com/apps-software/google-io-2023-biggest-announcements",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZsYKPGLnJqNa5nuMSE4po4-1200-80.jpg",
      "publishedAt": "2023-05-11T02:29:19Z",
      "content": "Google I/O 2023 kicked off today, and there were quite a lot of exciting announcements at the event. While the keynote touched on just certain topics, there was still plenty to talk about, and many a… [+8106 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Agencies",
      "title": "Fed gets room to hold rates in June amid signs inflation cooling",
      "description": "\"A quick read would indicate a tilt towards some potential further tightening of monetary policy,\" said Gregory Daco, chief economist at EY. \"But if you lift the cover and look at the underlying details in this report, actually they mostly point towards the h…",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/fed-gets-room-to-hold-rates-in-june-amid-signs-inflation-cooling/articleshow/100145268.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-100145274,width-1070,height-580,imgsize-2739273,overlay-etmarkets/photo.jpg",
      "publishedAt": "2023-05-11T00:11:08Z",
      "content": "New York: Signs of moderating price pressures in April will give Federal Reserve officials room to pause their aggressive tightening campaign next month, though inflation is still running too hot for… [+3115 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Helen Davidson in Taipei",
      "title": "Hong Kong passes law to limit work of foreign lawyers amid ongoing Jimmy Lai case",
      "description": "Amended legislation gives chief executive power to veto any foreign lawyer working on cases brought under national security lawHong Kong’s government has passed a law that allows authorities to ban foreign lawyers from working on national security cases, comp…",
      "url": "https://www.theguardian.com/world/2023/may/11/hong-kong-passes-law-to-limit-work-of-foreign-lawyers-amid-ongoing-jimmy-lai-case",
      "urlToImage": "https://i.guim.co.uk/img/media/3f637c53b00050cb969abb075b87a9942d67fcde/0_11_1548_929/master/1548.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=98b8f99e1ce4ac08b581f48df2268d05",
      "publishedAt": "2023-05-11T05:26:20Z",
      "content": "Hong Kongs government has passed a law that allows authorities to ban foreign lawyers from working on national security cases, completing a months-long effort to block a UK lawyer from defending medi… [+2668 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Huileng Tan",
      "title": "5 ways Russia's been sidestepping Western sanctions and keeping its economy alive, from switching to the Chinese yuan and dabbling in ghost trades",
      "description": "Russia has managed to keep its economy humming by skirting economic sanctions in various ways amid the Ukraine war.",
      "url": "https://www.businessinsider.com/dedollarization-russia-ukraine-war-energy-oil-trades-sanctions-2023-5",
      "urlToImage": "https://i.insider.com/6378cf952c8b9a0018cbc624?width=1200&format=jpeg",
      "publishedAt": "2023-05-11T06:19:10Z",
      "content": "5 ways Russia's been sidestepping Western sanctions and keeping its economy alive, from switching to the Chinese yuan and dabbling in ghost trades.Sasha Mordovets/Getty Images\r\n<ul>\n<li>Russia's kept… [+5939 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Computerhistory.org"
      },
      "author": null,
      "title": "A Backup of Historical Proportions",
      "description": "Discover what surprises await in CHM's release of the Xerox PARC file system archive.",
      "url": "https://computerhistory.org/blog/a-backup-of-historical-proportions/",
      "urlToImage": "https://computerhistory.org/wp-content/uploads/2023/05/chm_aoc_alto_website_img2_924x551.jpg",
      "publishedAt": "2023-05-11T03:28:38Z",
      "content": "Access the Xerox PARC file system archive here.\r\nAn Ancient Anxiety\r\nIs my phone really backed up in the Cloud? When was the last time I backed up my laptop? Is it true that I need a local backup of … [+24476 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Thomas Claburn",
      "title": "Google IO: A deeper dive into the developer day's details",
      "description": "WebGPU, Chrome extensions, Android, Dart, Flutter, and more\nGoogle's developer keynote at its IO show on Wednesday focused on Android and on web technology, which suddenly looks much more capable thanks to WebGPU, an API that allows web applications to tap in…",
      "url": "https://www.theregister.com/2023/05/11/google_io_2023_developers/",
      "urlToImage": "https://regmedia.co.uk/2023/05/10/android.jpg",
      "publishedAt": "2023-05-11T00:20:12Z",
      "content": "Google's developer keynote at its IO show on Wednesday focused on Android and on web technology, which suddenly looks much more capable thanks to WebGPU, an API that allows web applications to tap in… [+6794 chars]"
    }
  ]

  constructor(){
    super();
    console.log("I am Akshay Jain");
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0575a11efd8b4197bb308b6b28458716&page=1&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async() => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page-1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState(()=> ({
        page: this.state.page-1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      }));
    }
        
    handleNextClick = async () => {
      console.log("next");
      if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0575a11efd8b4197bb308b6b28458716&page=${this.state.page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState(() => ({
          page: this.state.page + 1,
          articles: parsedData.articles
        }));
      }
    }
  
  render(){
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                      {/* <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/> */}
                    </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn disabled btn-outline-primary">Page {this.state.page}</button>
          <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News