import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../../actions";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a task</h3>
        {/* initialValues specific prop in redux-form (or react-final-form) */}
        {/* // checks name prop in TodoForm's <Field /> -- from our todo object */}
        <TodoForm
          // We use pick from lodash to only pass certain props (our edited input) when submitting
          initialValues={_.pick(this.props.todo, "todo")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// mapStateToProps can take a second parameter ownProps
const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);

// With React-Router, each component must be designed to work in isolation (or fetch its own data), so
// if a user bookmarks a certain page, data will already be loaded after overriding the base /todos/edit route
// -- not calling a distinct action creator, but a callback passed down from another component
// (see TodoCreate and TodoForm)
