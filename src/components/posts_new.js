import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field){
    const { meta: {touched,error} } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
          className="form-control"
        />
      <div className="text-help">{touched ? error: ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="PostsNew" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="What's your name?"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Today's Date"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Note Content"
          name="content"
          component={this.renderField}
        />
      <button type="submit" className="btn btn-success">Save</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title ) {
    errors.title = "Enter your name!";
  }
  if (!values.categories) {
    errors.categories = "Enter today's date";
  }
  if (!values.content) {
    errors.content = "Leave a note";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
)
