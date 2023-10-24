import React, { Component } from 'react';

export default class NextPreButton extends Component {

    constructor(){
        super();
        console.log("I am Akshay Jain");
        this.state={
          page:1
        }
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
  

  render() {
    return (
      <div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn disabled btn-outline-primary">Page {this.state.page}</button>
          <button type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
