import React from 'react'
import GenericForm from './GenericForm'

class UpkeepForm extends React.Component{

    constructor(){
        super()
        
    }




    render(){
        return(
            <div className = 'myform'>
                <h1 style = {{color: '#482728'}}>Doggy Upkeep Form</h1><br/>
                <GenericForm type = 'Doggy Upkeep'/>
            </div>
        )
    }
}




export default UpkeepForm