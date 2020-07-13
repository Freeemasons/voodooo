import React, {Component} from 'react';
import './App.css';

import SearchForm from "./components/SearchForm";

import { Row, Col, Grid } from "react-flexbox-grid";
import PostsSynchron from "./components/PostsSynchron";



class App extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this)
  }



  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let posts = this.state.posts.filter(function (el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      posts: posts
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
              <PostsSynchron  />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
