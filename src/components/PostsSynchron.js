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
            <ul className="article__item">
              <li  className="article__item-title">
                {el.title}
              </li>
              <li  >
                {el.body}
              </li>
              <li className="article__item-author" >
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
        <Grid fluid className="article">
          <Row>
            <Col lg={12}>
              <div className="article__container">
                <Row className="article__row">
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
