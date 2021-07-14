import React from 'react'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import FP from './img/CLEANFP.png'
import doggo from './img/egg.jpeg'
import PuppyBasicForm from './Forms/PuppyBasicForm'
import ObedienceForm from './Forms/ObedienceForm'
import TrickForm from './Forms/TrickForm'
import UpkeepForm from './Forms/UpkeepForm'
import ThankYou from './Forms/ThankYou'
import Contact from './Contact'
import {useEffect, useState} from 'react'

function App(){


  const[currentPage, setCurrentPage] = useState('') 


  useEffect(()=>{

if (window.location.href === 'https://pawsibilitytraining.com/#/'){
  setCurrentPage('mehome')
}
else{
  try{
  setCurrentPage(localStorage.getItem('mypage'))
  }
  catch{
    setCurrentPage('mehome')
  }
}   
  },[])

 
const choosePage = (e)=>{
setCurrentPage(e.target.name)
localStorage.setItem('mypage', e.target.name)
}



  return(

    <div>
      <Router>

      <div className = 'topdiv' >
      <img  src = {doggo} style = {{width: '75px', marginTop:'10px'}} />
      <h2> Pawsibility Training</h2>
      </div>


        <Navbar collapseOnSelect expand="sm" className={"navstyle"} style = {{backgroundColor: '#56A3A6'}} variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          {/* style = {currentPage === 'home'? {color: '#091010'} : {color: '#2b5153'}} */}
          {/* onClick = {choosePage}  */}

   
          {/* <Navbar.Brand className ='logo' href="/"><img  src = {doggo} style = {{width: '30px'}} /></Navbar.Brand> */}
          <Nav className = "">
            <Nav.Link name = 'mehome' onClick = {choosePage}  className = 'navitem' style = {currentPage === 'mehome'? {color: '#091010'} : {color: '#2b5153'}}  href="#/" >Home</Nav.Link>
            <Nav.Link name = 'meabout' onClick = {choosePage}  className = 'navitem' style = {currentPage === 'meabout'? {color: '#091010'} : {color: '#2b5153'}} href="#about">About</Nav.Link>
            <Nav.Link name = 'meservices' onClick = {choosePage}  className = 'navitem' style = {currentPage === 'meservices'? {color: '#091010'} : {color: '#2b5153'}} href="#services">Services</Nav.Link>
            <Nav.Link name = 'mecontact' onClick = {choosePage} style = {currentPage === 'mecontact'? {color: '#091010'} : {color: '#2b5153'}} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>


        <Switch>
         <Route path = "/" exact component = {Home} />
         <Route path = "/services" component = {Services} />
         <Route path = "/about" exact component = {About} />
         <Route path = "/puppybasics" exact component = {PuppyBasicForm} />
         <Route path = "/upkeep" exact component = {UpkeepForm} />
         <Route path = "/tricks-agility" exact component = {TrickForm} />
         <Route path = "/obedience" exact component = {ObedienceForm} />
         <Route path = "/submissioncomplete" exact component = {ThankYou} />
         <Route path = "/contact" exact component = {Contact} />
        </Switch>
      </Router>
    </div>

  )

}






export default App