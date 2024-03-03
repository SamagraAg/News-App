import React, { Component } from 'react'
import NewsItem from './NewsItem'
const apiKey = "bc1fd5b3920b4c1ca0577ab4ef63ca5d"

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        };
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        const response = await fetch(url);
        const parsedResponse = await response.json()
        this.setState({articles:parsedResponse.articles})
    }
    render() {
        return (
            <div className='container my-2'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return <div className="col-md-4" key={article.url}>
                            <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} url={article.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
