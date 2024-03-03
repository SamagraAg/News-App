import React, { Component } from 'react'
const defaultUrl = `https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg`
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props
    return (
      <div className='my-2'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl!=null ? imageUrl : defaultUrl} style={{ width: "18rem", height: "10rem"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a target='_blank' href={url} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
