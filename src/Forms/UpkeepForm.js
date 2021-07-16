import React from 'react'
import GenericForm from './GenericForm'

class UpkeepForm extends React.Component{

    constructor(){
        super()
        
    }

    componentDidMount(){
        this.props.handsel('meservices')
        console.log('services mounted')
    }


    render(){
        window.scrollTo(0,0)
        return(
            
            <div className = 'myform'>
                <h1 style = {{color: '#482728'}}>Doggy Upkeep Form</h1><br/>
                <GenericForm type = 'Doggy Upkeep'/>
            </div>
        )
    }
}




export default UpkeepForm