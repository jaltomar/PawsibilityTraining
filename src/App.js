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


function handSelectPage(choice){
  console.log('heandselect')
  console.log(choice)
  setCurrentPage(choice)
  localStorage.setItem('mypage', choice)
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
            <Nav.Link name = 'mehome'  className = 'navitem' style = {currentPage === 'mehome'? {color: '#091010'} : {color: '#2b5153'}}  href="#/" >Home</Nav.Link>
            <Nav.Link name = 'meabout'   className = 'navitem' style = {currentPage === 'meabout'? {color: '#091010'} : {color: '#2b5153'}} href="#about">About</Nav.Link>
            <Nav.Link name = 'meservices'   className = 'navitem' style = {currentPage === 'meservices'? {color: '#091010'} : {color: '#2b5153'}} href="#services">Services</Nav.Link>
            <Nav.Link name = 'mecontact' style = {currentPage === 'mecontact'? {color: '#091010'} : {color: '#2b5153'}} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>


        <Switch>
         <Route path = "/" exact render = {() => (<Home handsel = {handSelectPage}/>)}/>
         <Route path = "/services" render = {() => (<Services handsel = {handSelectPage}/>)} />
         <Route path = "/about" render = {() => (<About handsel = {handSelectPage}/>)} />
         <Route path = "/puppybasics" render = {() => (<PuppyBasicForm handsel = {handSelectPage}/>)} />
         <Route path = "/upkeep" render = {() => (<UpkeepForm handsel = {handSelectPage}/>)} />
         <Route path = "/tricks-agility" render = {() => (<TrickForm handsel = {handSelectPage}/>)} />
         <Route path = "/obedience" render = {() => (<ObedienceForm handsel = {handSelectPage}/>)} />
         <Route path = "/submissioncomplete" render = {() => (<ThankYou handsel = {handSelectPage}/>)} />
         <Route path = "/contact" render = {() => (<Contact handsel = {handSelectPage}/>)}/>
        </Switch>
      </Router>
    </div>

  )

}






export default App