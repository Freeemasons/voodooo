import React, {Component} from "react";
import { Row, Col, Grid } from "react-flexbox-grid";


class PostsSynchron extends Component {
  constructor(props) {
    super(props);

  }



  render(){


    const postShow = this.props.posts.map(el => {
      const postAuthor = this.props.authors.find(author => author.id === el.userId);
      return (
        <Col lg={4} key={el.id} >
          <div>
            <ul className="ul-bg">
              <li  className="post-title">
                {el.title}
              </li>
              <li  >
                {el.body}
              </li>
              <li className="post-author" >
                <div>
                  {postAuthor.name}
                </div>
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



export default PostsSynchron;
