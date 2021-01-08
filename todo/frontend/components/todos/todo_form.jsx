import React from 'react';
import uniqueId from '../../util'


export default class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    handleSubmit(event){

    }

    render(){
        return (
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title"/>
                <br/>
                <label htmlFor="body">Body: </label>
                <input type="text" id="body"/>
                <button>Submit</button>
            </div>
        )
    }

}