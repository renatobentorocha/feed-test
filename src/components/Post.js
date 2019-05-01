/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import PostHeader from './PostHeader';

export default class Post extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <PostHeader data={data} />
        <div className="feed">
          <p>{data.body}</p>
        </div>
      </div>
    );
  }
}
