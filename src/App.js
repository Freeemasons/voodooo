import React from 'react';
import './App.css';

import SearchForm from "./components/SearchForm";

import { Row, Col, Grid } from "react-flexbox-grid";
import PostsSynchron from "./components/PostsSynchron";
import FetchedPosts from "./components/FetchedPosts";





function App() {


  return (
    <div className="container">
      <Grid>
        <Row>
          <Col lg={10}>
            <SearchForm/>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <h2>Синхронные посты</h2>
            <PostsSynchron  />
          </Col>
          <Col lg={6}>
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts={[]} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
