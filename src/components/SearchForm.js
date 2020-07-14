import React from "react";
import {Col, Grid, Row} from "react-flexbox-grid";

export default class SearchForm extends React.Component {


  render() {
    return (
      <div>
        <Grid fluid className="search-form">
          <Row>
            <Col lg={12} className="search-form__row">
              <input type="text" placeholder="Search..."  onChange={this.props.handleSearch} className="search-form__input"/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
