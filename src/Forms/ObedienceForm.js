import React from 'react'
import GenericForm from './GenericForm'

class ObedienceForm extends React.Component{

    constructor(){
        super() 

    }


    render(){
        window.scrollTo(0,0)
        return(
            <div className = 'myform'>
                <h1 style = {{color: '#482728'}}>General Obedience Form</h1><br/>
                <GenericForm type = 'Obedience'/>
            </div>
        )
    }
}




export default ObedienceForm