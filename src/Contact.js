import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'




function Contact(props){



    useEffect(()=>{
            props.handsel('mecontact')
            console.log('contact mounted')
    },[])



    const [text, setText] = useState('')
    

    const handleSubmit = (e) =>{
        e.preventDefault();
    

        emailjs.sendForm('service_51vgzp5', 'template_ee4tdyd', e.target, 'user_jOcO3IUILgz5xev2ZpNaE')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

        setText('')
        alert('Message sent successfully!')

    }

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    window.scrollTo(0,0)

    return(
        <div style = {{textAlign: 'center', marginTop: '3%', fontSize: '22px', color: '#482728'}}>
            <div style = {{textAlign: 'left', width: '70%', maxWidth: '747px', margin: 'auto'}}>
                <p>Feel free to contact us with any questions or concerns you might have!</p>
                <p>Call or text: 267-424-4239</p>

                <p>Email: pawsibilitytraining@gmail.com</p><br/>

                <label>Send a message: </label>
                <div style = {{textAlign: 'left', width: '100%', maxWidth: '747px', overflow: 'hidden'}}>

                 <form onSubmit = {handleSubmit}>
                <textarea style = {{fontSize: '18px', resize: 'auto'}}name = 'message' onChange = {handleChange} value = {text} rows = '6' cols = '80'/><br/>

                <div style = {{textAlign: 'center'}}>
                <Button type = 'submit' className = 'mybutton'>Submit</Button>
                </div>
                </form>
                </div>
                <br/>

            </div>
         </div>
    )
    
}


export default Contact