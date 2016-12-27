import React from 'react';
import { Link } from 'react-router';
import Header from './common/Header';

export default class Root extends React.Component {
  render() {
      return (
        <div>
         <Header/>
         <div className="container">
          { this.props.children }
         </div>
        </div>
      );
    }
}
