import React from 'react'
import GenericForm from './GenericForm'

class PuppyBasicForm extends React.Component{

    constructor(){
        super() 

    }


    render(){
        return(
            <div className = 'myform'>
                <h1 style = {{  color: '#482728'}}>Puppy Basics Form</h1><br/>
                <GenericForm type = 'Puppy Basics'/>
            </div>
        )
    }
}




export default PuppyBasicForm