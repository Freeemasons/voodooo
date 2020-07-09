import React, {Component} from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import Post from "./Post";

// export default ({posts}) => {
//   if (!posts.length) {
//     return <button>постов нет</button>
//   }
//   return (
//     posts.map(post => < Post post={post} key={post}/>)
//   )
// }

class PostsSynchron extends Component {
  constructor(props) {
    super(props);

  }



  render(){


    const postShow = this.props.currencies.map(el=> {
      return (
        <Col lg={4}>
          <div key={el.id}>
            <ul className="ul-bg">
              <li  className="post-title">
                {el.title}
              </li>
              <li  >
                {el.text}
              </li>

              <li className="post-author">
                {el.name}
              </li>
              <li  className="post-author post-author_tel">
                {el.phoneNumber}
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
