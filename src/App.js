import React, {Component} from 'react';
import './App.css';

import SearchForm from "./components/SearchForm";

import { Row, Col, Grid } from "react-flexbox-grid";
import PostsSynchron from "./components/PostsSynchron";
import FetchedPosts from "./components/FetchedPosts";





class App extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this)
  }

  state = {
    currencies: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
        name: 'Darth Vader',
        phoneNumber: '+250966666666',

      }, {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
        name: 'Princess Leia',
        phoneNumber: '+250966344466',

      }, {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',

      }, {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
      }
    ]
  }

  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let currencies = this.state.currencies.filter(function (el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      currencies: currencies
    });
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <Col lg={12}>
              <SearchForm handleSearch={this.handleSearch}/>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <PostsSynchron currencies={this.state.currencies} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }


}

export default App;
