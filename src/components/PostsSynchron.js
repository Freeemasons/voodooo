import React, {Component} from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import {connect} from 'react-redux';

import {showPost} from "../redux/actions";

class PostsSynchron extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch, showPost } = this.props;
    debugger;
    showPost();
  }


  render(){

    debugger;
    const postShow = this.props.posts.map(el=> {
      return (
        <Col lg={4} >
          <div key={el.id}>
            <ul className="ul-bg">
              <li  className="post-title">
                {el.title}
              </li>
              <li  >
                {el.body}
              </li>
              <li className="post-author">
                {el.name}
              </li>
            </ul>
          </div>
        </Col>
      );
    })

    return (
      <div>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <div className="posts-container">
                <Row className="posts-row">
                  {postShow}
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showPost: () => (dispatch(showPost())),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsSynchron);
