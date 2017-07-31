import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostIndex} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
