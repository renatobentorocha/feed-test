/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import '../styles/style.scss';
import Header from './Header';
import Post from './Post';

// import { Container } from './styles';

export default class App extends Component {
  state = {
    post: {
      id: 1,
      name: 'Maria leal',
      avatar:
        'https://osegredo.com.br/wp-content/uploads/2017/09/O-que-as-pessoas-felizes-t%C3%AAm-em-comum-site-830x450.jpg',
      time: 'há 3 min',
      body: `Todas estas questões, devidamente ponderadas,
          levantam dúvidas sobre se a mobilidade dos capitais internacionais
          garante a contribuição de um grupo importante na determinação do fluxo
           de informações.
        `,
    },
  };

  render() {
    const { post } = this.state;

    return (
      <Fragment>
        <Header />
        <Post data={post} />
      </Fragment>
    );
  }
}
