import { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaTwitterSquare } from '@fortawesome/free-solid-svg-icons'
// import { FaTwitterSquare } from "react-icons/fa";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      current: 0,
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison"
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://type.fit/api/quotes`);
    const json = await response.json();
    this.setState({ data: json });
  } 

  changeQuote = () => {
    let current = Math.floor(Math.random() * this.state.data.length)
    this.setState({current})
  }

  render(){
    const { data, current, text, author } = this.state;
    const content = data.map((item) => {
      if (
        item.text ==
        "Genius is one percent inspiration and ninety-nine percent perspiration."
      ) {
        return (
          <>
            <h1 id="text">{item.text}</h1>
            <h2 id="by">{item.author}</h2>
          </>
        );
      }
    });
    return (
      <div className="wrapper">
          <div className="box">
              <div className="inner-box">
                  <i className="fas fa-quote-left"></i>
                  <div className="quote">
                    {content }
                    {/* <h1 id="text">{current ? data[current].text : text}</h1>
                    <h2 id="by">{current ? data[current].author : author}</h2> */}
                  </div>
                  <div className="twitter">
                      <button id="next" onClick={this.changeQuote}>Next quote</button>
                      <i className="fab fa-twitter-square"></i>
                      {/* <FontAwesomeIcon icon={FaTwitterSquare} /> */}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
