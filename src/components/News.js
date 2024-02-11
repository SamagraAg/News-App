import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class News extends Component {
    render() {
        return (
            <>
            This is news section
            <NewsComponent></NewsComponent>
            <NewsComponent></NewsComponent>
            </>
        )
    }
}

export default News
