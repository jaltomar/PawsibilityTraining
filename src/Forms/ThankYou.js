import React, { useEffect } from 'react'
import smile from '../img/smile.jpeg'
import beautydog from '../img/beautydog.jpeg'


function ThankYou(props){


useEffect(()=>{

        props.handsel('meservices')
        console.log('services mounted')
    
},[])


    window.scrollTo(0,0)
    return(
        <div style = {{width: '50%', margin: 'auto', paddingTop: '40px', textAlign: 'center'}}>
            <h2 style = {{color: '#482728'}}>Thank you!  Your submission was received.  You will be contacted shortly about setting up a session.</h2>
            <img width = "400px" src = {beautydog} alt = 'beautydog'/>
       </div>
    )
}



export default ThankYou