import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../../actions";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  // determines if edit/delete allowed (admin only)
  renderAdmin(todo) {
    if (
      todo.userId === this.props.currentUserId &&
      this.props.currentUserId !== null
    ) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          {this.renderAdmin(todo)}
          <i className="large middle aligned icon camera" />
          <div className="content">{todo.todo}</div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/todos/new" className="ui button primary">
            Create todo
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // gets the values from our todos state object
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
