import React from 'react'
import Button from 'react-bootstrap/Button';
// import firebase from './FireBase'
import emailjs from 'emailjs-com'

class GenericForm extends React.Component{

    constructor(){
        super() 
        this.state = {
            fname:'',
            phone: '',
            email: '',
            address: '',
            bestway: '',
            howhear:'',
            whatkind: '',
            howlong: '',
            cratetrained:'',
            chewinghabits:'',
            nipping:'',
            teething:'',
            jumping:'',
            pottytraining:'',
            cratetraining:'',
            nailtrimming:'',
            earcleaning:'',
            tricktraining:'',
            recall:'',
            leashwalking:'',
            other:'',
            pleaseexplain:'',
            wholives:'',
            haveyou:'',
            questions:''

            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        var templateParams = {
          name: this.state.fname,
          type: this.props.type,
          phone: this.state.phone,
          email: this.state.email,
          address: this.state.address,
          bestway: this.state.bestway,
          howhear: this.state.howhear,
          whatkind: this.state.whatkind,
          howlong: this.state.howlong,
          cratetrained: this.state.cratetrained,
          mework: this.state.chewinghabits+this.state.nipping
          +this.state.teething+this.state.jumping+this.state.pottytraining+this.state.cratetraining+this.state.nailtrimming+this.state.earcleaning
          +this.state.tricktraining+this.state.recall+this.state.leashwalking+this.state.other,
          pleaseexplain: this.state.pleaseexplain,
          wholives: this.state.wholives,
          haveyou: this.state.haveyou,
          questions: this.state.questions
      };
      console.log('fname is really:' + this.state.fname)

        emailjs.send("service_51vgzp5","template_ef1rrab",templateParams,'user_jOcO3IUILgz5xev2ZpNaE')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text)
           window.location.href = '#submissioncomplete'
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

    handleChange(e){


       if (e.target.type === "radio"){ 

        if (this.state.[e.target.name] ===''){
 
        this.setState({[e.target.name]: e.target.value + ', '})
        }
        else{

          this.setState({[e.target.name]: ''})
        }

       }

        else{
        this.setState({
            [e.target.name]: e.target.value
        })
      }

  
    }


    render(){
        return(
            <div className  = 'formdiv' style = {{  color: '#482728'}}>

                <form onSubmit = {this.handleSubmit}>


                 <div style = {{border: 'red solid 2px'}}>
                  <label>Full Name:</label><br/> <input type = 'text' className = 'inputtext' name = 'fname' value = {this.state.fname} onChange = {this.handleChange}/><br/>
                  <label>Phone:</label><br/> <input type = 'text' className = 'inputtext' name = 'phone' value = {this.state.phone} onChange = {this.handleChange}/><br/>
                  <label>Email:</label> <br/><input type = 'text' className = 'inputtext' name = 'email' value = {this.state.email} onChange = {this.handleChange}/> <br/>
                  <label>Address:</label> <br/><input type = 'text' className = 'inputtext' name = 'address' value = {this.state.address} onChange = {this.handleChange}/><br/>
                  <br/><br/>

                  
                </div>
                  
                  
                  <label>What is the best way and time to contact you?</label><br/> <input type = 'text' className = 'inputtext' name = 'bestway' value = {this.state.bestway} onChange = {this.handleChange}/><br/>
                  <label>How did you hear about Pawsibility Training?</label><br/> <input type = 'text' className = 'inputtext' name = 'howhear' value = {this.state.howhear} onChange = {this.handleChange}/><br/>
              



                  <label>What kind of dog(s) do you have? How old are they? Are they spayed/neutered?</label><br/>







                <div style = {{ border: 'green solid 2px', textAlign: 'left', display: 'block', width: '100%', maxWidth: '600px'}}>
                  <textarea style = {{fontSize: '18px', width: '100%', height: '100px'}}name = 'whatkind' value = {this.state.whatkind} onChange = {this.handleChange} /><br/>

                </div>









                  <label>How long have you had your dog(s)? </label> <br/><input type = 'text' className = 'inputtext' name = 'howlong' value = {this.state.howlong} onChange = {this.handleChange}/><br/>
                  <label>Is your dog crate trained? </label> <br/><input type = 'text' className = 'inputtext' name = 'cratetrained' value = {this.state.cratetrained} onChange = {this.handleChange}/><br/>
                  <label >What would you like to work on with your dog(s)? (select all that apply)</label><br/> 
                  <label>
                    <input type = 'radio' name = 'chewinghabits' value = 'Chewing Habits' onClick = {this.handleChange} checked = {this.state.chewinghabits === 'Chewing Habits, '} />
                    Chewing Habits
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Nipping' name = 'nipping' onClick = {this.handleChange} checked = {this.state.nipping === 'Nipping, '} />
                    Nipping
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Teething' name = 'teething' onClick = {this.handleChange} checked = {this.state.teething === 'Teething, '} />
                    Teething
                  </label><br/>
                  <label>
                    <input type = 'radio' name = 'jumping' value = 'Jumping' onClick = {this.handleChange} checked = {this.state.jumping === 'Jumping, '}  />
                    Jumping
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Potty Training' name = 'pottytraining' onClick = {this.handleChange} checked = {this.state.pottytraining === 'Potty Training, '} />
                    Potty Training
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Crate Training' name = 'cratetraining' onClick = {this.handleChange} checked = {this.state.cratetraining === 'Crate Training, '}  />
                    Crate Training
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Nail Trimming' name = 'nailtrimming' onClick = {this.handleChange} checked = {this.state.nailtrimming === 'Nail Trimming, '} />
                    Nail Trimming
                  </label><br/>

                  <label>
                    <input type = 'radio' value = 'Ear Cleaning' name = 'earcleaning' onClick = {this.handleChange} checked = {this.state.earcleaning === 'Ear Cleaning, '} />
                   Ear Cleaning
                  </label><br/>

                  <label>
                    <input type = 'radio' value = 'Trick Training' name = 'tricktraining' onClick = {this.handleChange} checked = {this.state.tricktraining === 'Trick Training, '}  />
                    Trick Training
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Recall' name = 'recall' onClick = {this.handleChange} checked = {this.state.recall === 'Recall, '} />
                    Recall
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Leash Walking' name = 'leashwalking' onClick = {this.handleChange} checked = {this.state.leashwalking === 'Leash Walking, '} />
                    Leash Walking
                  </label><br/>
                  <label>
                    <input type = 'radio' value = 'Other' name = 'other' onClick = {this.handleChange} checked = {this.state.other === 'Other, '} />
                    Other (please describe below)
                  </label><br/>



                  <div style = {{ border: 'green solid 2px', textAlign: 'left', display: 'block', width: '100%', maxWidth: '600px'}}>
                  <label>Please explain a little bit about your dog(s) and areas you would like to work on...
 </label><br/> <textarea style = {{fontSize: '18px', width: '100%', height: '100px'}}  name = 'pleaseexplain' value = {this.state.pleaseexplain} onChange = {this.handleChange}/> <br/>
                 </div>
                 
                 
                 
                 
                 <div style = {{ border: 'green solid 2px', textAlign: 'left', display: 'block', width: '100%', maxWidth: '600px'}}>
                  <label>Who lives in your household and how old are they? What is their relationship to the dog(s)?
 </label><br/> <textarea style = {{fontSize: '18px', width: '100%', height: '100px'}}  name = 'wholives' value = {this.state.wholives} onChange = {this.handleChange}/><br/>
                 </div>
                 
                 
                 
                 
                 
                 <div style = {{ border: 'green solid 2px', textAlign: 'left', display: 'block', width: '100%', maxWidth: '600px'}}>
                  <label>Have you ever used a dog trainer/behaviorist/psychologist before? Please share your experiences.
 </label> <br/> <textarea style = {{fontSize: '18px', width: '100%', height: '100px'}} name = 'haveyou' value = {this.state.haveyou} onChange = {this.handleChange}/><br/>
                 </div>
                 
                 
                 
                 
                 
                 
                 <div style = {{ border: 'green solid 2px', textAlign: 'left', display: 'block', width: '100%', maxWidth: '600px'}}>
                  <label>Questions/additional information:</label> <br/> <textarea style = {{fontSize: '18px', width: '100%', height: '100px'}} name = 'questions' value = {this.state.questions} onChange = {this.handleChange}/><br/>
                  </div>






                  <p style = {{maxWidth: '400px'}}>Note:  All training starts with a half an hour consult to learn more about your dog ($50)</p>
                  <div style = {{textAlign: 'center'}}> 
                     <Button type = 'submit' className = 'mybutton'>Submit</Button><br/>
                  </div>

                </form>

            </div>
        )
    }
}



export default GenericForm