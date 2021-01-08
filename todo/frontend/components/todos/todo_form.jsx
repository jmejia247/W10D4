import React from 'react';
import uniqueId from '../../util'
import { receiveTodo } from '../../actions/todo_actions';


export default class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          title: "",
          body: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        debugger
        return (event) => {
            // debugger
            this.setState({[field]: event.target.value})
        }
    }

    handleSubmit(event){
        event.preventDefault();
        let todo = {
            id: uniqueId(),
            title: this.state.title,
            body: this.state.body,
            done: false
        }
        // debugger
        this.props.receiveTodo(todo);
        this.setState({
            title: '',
            body: ''
        })
    }

    render(){
        // debugger
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                onChange={this.update("title")}
                value={this.state.title}
              />
              <br />
              <label htmlFor="body">Body: </label>
              <input
                type="text"
                id="body"
                onChange={this.update("body")}
                value={this.state.body}
              />
              <button>Submit</button>
            </form>
          </div>
        );
    }

}