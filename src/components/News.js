import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row my-3">
                    <div className="col-md-4"><NewsItem title="News1 Title" description="News1 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                    <div className="col-md-4"><NewsItem title="News2 Title" description="News2 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                    <div className="col-md-4"><NewsItem title="News3 Title" description="News3 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4"><NewsItem title="News4 Title" description="News4 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                    <div className="col-md-4"><NewsItem title="News5 Title" description="News5 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                    <div className="col-md-4"><NewsItem title="News6 Title" description="News6 Description" imageUrl="https://dims.apnews.com/dims4/default/c8cfc13/2147483647/strip/true/crop/8383x4715+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc7%2F30566bcd42da83dbda4afa0ddbee%2F2cd3285d184243029e1d5d0abe4a3a27"/></div>
                </div>
            </div>
        )
    }
}

export default News
