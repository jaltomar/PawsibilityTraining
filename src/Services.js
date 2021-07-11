import Button from 'react-bootstrap/Button';
import React from 'react'
import peedog from './img/peedog.jpg'
import pupper from './img/fieldpup.jpeg'
import staydog from './img/tongue.jpg'
import rolldog from './img/wove.jpeg'
import naildog from './img/teethie.jpg'






class Services extends React.Component{


    render(){


        return(

            <div className = 'allServices'  >
        

                {/* <p style = {{textAlign: 'center', fontSize: '30px', width: '50%', margin: 'auto'}}>Just choose one of our courses below to get started! 30 minutes consultations cost $50, and 45 minute private sessions cost $60  </p>
                    <hr/> */}

                    <div className = 'servicediv' style = {{paddingTop: '20px'}}>
                        <div className = 'servicePicDiv'>
                            <img className = 'serviceImg' src = {pupper} alt = 'pupper'/>
                        </div>
                        <div className = 'servicetextdiv' >
                            <h2 style = {{textAlign: 'center'}}>Puppy Basics</h2>
                            <p>
                            A new puppy can be such an exciting addition to your home! Often full of energy and silly antics, they are bound to make you laugh. Sometimes, though, their youthful whimsy can get them into trouble. Puppies may present you with challenges such as teething, nipping, accidents in the house, and trouble settling down or sleeping through the night.  Includes crate training and potty training.                             </p>
                        

                            <Button className = 'mybutton' href = '/puppybasics'>Sign Up</Button>
                        </div>
                    </div><hr/>

                    <div className = 'servicediv'>
                        <div className = 'servicePicDiv'>
                            <img className = 'serviceImg' src = {staydog} alt = 'staydog'/>
                        </div>
                        <div className = 'servicetextdiv' >
                            <h2 style = {{textAlign: 'center'}}>General Obedience</h2>
                            <p>
                            A strong foundation is essential for success with your dog. Your dog should be able to sit, down, stay, and come even in, and especially in, stressful situations. You should not have to worry about your dog dragging you down the street on a walk. Basic obedience can help your dog to remain calm in distracting environments as well as keep them, and others around you, safe. Obedience is important during times when you have visitors to your home, when you take your dog out in public, and even when you are alone with your dog.                    </p>
                          
                            <Button className = 'mybutton' href = '/obedience' >Sign Up</Button>
                        </div>
                    </div><hr/>

                    <div className = 'servicediv'>
                        <div className = 'servicePicDiv'>
                            <img className = 'serviceImg' src = {naildog} alt = 'naildog'/>
                        </div>
                        <div className = 'servicetextdiv' >
                            <h2 style = {{textAlign: 'center'}}>Doggy Upkeep</h2>
                            <p>
                            Did you know that dogs should have their nails trimmed every 2 weeks? For many dogs, routine care such as nail trimming and ear cleaning can cause anxiety and spark fear. These essential procedures can also stress you out! We can help you and your dog become more comfortable with ear cleaning and nail trimming, complete cleaning and trimming, as well as teach you how to do it yourself.
                            </p>
                 
                            <Button className = 'mybutton' href = '/upkeep' >Sign Up</Button>
                        </div>
                    </div><hr/>

                    <div className = 'servicediv'>
                        <div className = 'servicePicDiv'>
                            <img className = 'serviceImg' src = {rolldog} alt = 'rolldog'/>
                        </div>
                        <div className = 'servicetextdiv' >
                            <h2 style = {{textAlign: 'center'}}>Tricks and Agility</h2>
                            <p>
                            Teaching your dog a variety of tricks and skills can improve your dog’s confidence and can be an integral part of a healthy routine. Exercising your dog’s brain can tire them in a different way than physical exercise does. Spending time on tricks can help to decrease other undesirable behaviors, such as chewing and restlessness. This training can also help to decrease your dog’s general anxiety. Most of all, though, tricks are fun for both of you!                    </p>
                           
                            <Button className = 'mybutton' href = '/tricks-agility' >Sign Up</Button>
                        </div>
                    </div><hr/>

                    
                    <p style = {{textAlign: 'center', fontSize: '20px', color: '#482728'}}>30 minute initial consult: $50</p>
                    <p style = {{textAlign: 'center', fontSize: '20px', color: '#482728'}}>45 minute private sessions: $75</p>

            </div>

            
        )
    }
}



export default Services