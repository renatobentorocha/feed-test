/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class PostHeader extends Component {
  constructor() {
    super();
    this.avatar = 'https://osegredo.com.br/wp-content/uploads/2017/09/O-que-as-pessoas-felizes-t%C3%AAm-em-comum-site-830x450.jpg';
  }

  render() {
    const { data } = this.props;
    return (
      <div className="perfil">
        <img src={data.avatar} alt="" />

        <div className="name-perfil">
          <strong className="name">{data.name}</strong>
          <p className="post-time">{data.time}</p>
        </div>
      </div>
    );
  }
}
