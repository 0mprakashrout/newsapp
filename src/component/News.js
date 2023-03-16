import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResults:0,


    };
  }
 async newsUpadte(){
  this.props.setProgress(9)
  const url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6c4bfdff3ef4db9864f5fe7a924cf84&pageSize=${this.props.pageSize}`;
let data = await fetch(url);
this.props.setProgress(21)

this.setState({loading:true});
let parsedData = await data.json();
this.props.setProgress(72)

this.setState({ articles: parsedData.articles,
  totalResults:parsedData.totalResults,

  loading:false });
  this.props.setProgress(100)


  }
  fetchMoreData = async() => {
    this.setState({page:this.state.page})
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6c4bfdff3ef4db9864f5fe7a924cf84&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
this.setState({loading:true});
let parsedData = await data.json();
this.setState({ articles: this.state.articles.concat(parsedData.articles),
  totalResults:parsedData.totalResults,
  loading:false });
  }

  async componentDidMount() {
    this.newsUpadte();
  }
  // handlePrevClick = async () => {
  //   this.setState ({page:this.state.page-1})
  //   this.newsUpadte();
  // };
  // handleNexClick = async () => {
  //  this.setState ({page:this.state.page+1})
  //   this.newsUpadte();

  // };

  render() {
    return (
      <>
        <h2 style={{margin: "60px" , textAlign:"center"}} >NewsToday | Top HeadLine</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
        <div className="row">
          
          { this.state.articles.map((element) => {
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
        </div>
         </InfiniteScroll>
      </>
    )
  }
}

export default News;
