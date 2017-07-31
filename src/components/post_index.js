import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <div>
            <h3 className="noteContent">{post.content}</h3>
            <p className="mt"><b>Date:</b> {post.categories}<span><b>From:</b> {post.title} :)</span></p>
          </div>
        </li>
      )
    });
  }
  render() {
    return (
      <div className="PostIndex">
        <div className="text-right">
          <Link className="btn btn-primary" to="/posts/new">Add A Post</Link>
        </div>
        <h1 className="text-center header">Leave a Note!</h1>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
