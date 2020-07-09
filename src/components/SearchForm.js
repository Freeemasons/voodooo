import React from "react";
import {Col, Grid, Row} from "react-flexbox-grid";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col lg={12} className="search-form-row">
              <input type="text" placeholder="Search..."  onChange={this.props.handleSearch} className="search-form-input"/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
