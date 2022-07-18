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
          <Link to={`/todos/edit/${todo.id}`} className="ui pink button">
            Edit
          </Link>
          <Link to={`/todos/delete/${todo.id}`} className="ui grey button">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          {this.renderAdmin(todo)}
          <div className="content">{todo.todo}</div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/todos/new" className="ui pink button">
            Create todo
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="ui divided list">{this.renderList()}</div>
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
