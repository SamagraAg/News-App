import React, { Component } from 'react'

export default class Footer extends Component {
    state = {
        page: 1
    }
    render() {
        let {handlePrev, handleNext} = this.props
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <button onClick={handlePrev} type="button" className="btn btn-dark btn-sm">&laquo; Previous</button>
                    <p>Page: {this.state.page}</p>
                    <button onClick={handleNext} type="button" className="btn btn-dark btn-sm">Next &raquo;</button>
                </div>
            </div>
        )
    }
}
