import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2023/03/faraday-future-ff91.jpg?resize=1200,674":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'80%',zindex:1}}>{source}
            </span>
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success">By {!author?"unknown": author} on {new Date (date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
