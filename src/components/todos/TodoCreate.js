// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createTodo } from "../../actions";

// class TodoCreate extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   // arrow function to keep context of renderError
//   renderInput = ({ input, label, meta }) => {
//     // accessing formProps object

//     return (
//       <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     // handleSubmit automatically calls e.preventDefault()
//     this.props.createTodo(formValues);
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field
//           name="todo"
//           component={this.renderInput}
//           label="Enter a new task"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// // formValues contains all different values submitted in form
// // renderInput will receive the errors object and push it to error
// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.todo) {
//     errors.todo = "You must enter a task";
//   }

//   return errors;
// };

// // validate will run synchronous with form
// const formWrapped = reduxForm({ form: "todoCreate", validate: validate })(
//   TodoCreate
// );

// export default connect(null, { createTodo })(formWrapped);

import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../../actions";
import TodoForm from "./TodoForm";

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTodo })(TodoCreate);
