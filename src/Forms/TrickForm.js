import React from 'react'
import GenericForm from './GenericForm'

class TrickForm extends React.Component{

    constructor(){
        super()
        
    }




    render(){
        window.scrollTo(0,0)
        return(
            <div className = 'myform'>
                <h1 style = {{color: '#482728'}}>Tricks and Agility Form</h1><br/>
                <GenericForm type = "Tricks and Agility"/>
            </div>
        )
    }
}




export default TrickForm