import React, {Component} from 'react';
import './App.css';

import SearchForm from "./components/SearchForm";

import { Row, Col, Grid } from "react-flexbox-grid";
import PostsSynchron from "./components/PostsSynchron";
import {connect} from "react-redux";
import {showAuthors, showPost} from "./redux/actions";




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      authors: [],
    }

    this.handleSearch = this.handleSearch.bind(this)
  }



  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();

    const matchingAuthors = this.props.authors.filter(author => author.name.toLowerCase().includes(searchQuery)).map(author => author.id);

    const matchedPosts = this.props.posts.filter(post => {

      if (matchingAuthors.includes(post.userId)) return true;
      return false;
    })

debugger

    this.setState({
      posts: matchedPosts
    });
  }


  componentDidMount() {
    const { showPost, showAuthors } = this.props;
    console.log('lolo')
    showPost();
    showAuthors();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.authors.length !== this.props.authors.length) {
      this.setState({ authors: this.props.authors });
    }
    if (prevProps.posts.length !== this.props.posts.length) {
      this.setState({ posts: this.props.posts });
    }
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
              <PostsSynchron posts={this.state.posts}  authors={this.state.authors}/>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    authors: state.authors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showPost: () => (dispatch(showPost())),
    showAuthors: () => (dispatch(showAuthors())),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
