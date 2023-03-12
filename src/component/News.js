import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: '9',
    category:'general'
    
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,

    };
  }
 async newsUpadte(){
  const url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6c4bfdff3ef4db9864f5fe7a924cf84&pageSize=${this.props.pageSize}`;
let data = await fetch(url);
this.setState({loading:true});
let parsedData = await data.json();
this.setState({ articles: parsedData.articles,
  totalResults:parsedData.totalResults,
  loading:false });

  }

  async componentDidMount() {
    this.newsUpadte();
  }
  handlePrevClick = async () => {
    this.setState ({page:this.state.page-1})
    this.newsUpadte();
  };
  handleNexClick = async () => {
   this.setState ({page:this.state.page+1})
    this.newsUpadte();

  };

  render() {
    return (
      <div className="container text-center my-4 ">
        <h2 style={{margin: "40px"}} >NewsToday | Top HeadLine</h2>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 89) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-2 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
           disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-primary"
            onClick={this.handleNexClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
