import React, { Component } from 'react';
import axios from 'axios';
import Error from './Error';

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=03469b0c20374d70a52d59b95a7b5a7e`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item, index) => (
        <div key={index}>
            <div className = "divider" > </div>
            <a href = {item.url} target = "_blank" >
                <div className = "section">
                <h5> {item.source.name} </h5> <p> {item.title} </p> 
                </div> 
            </a>
        </div>
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Sidenews;
