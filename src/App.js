import React from 'react'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

  const [home,setHome] = useState(false)







  useEffect(()=>{
    setHome(true)
    console.log("home"+home)
    
  },[])

 
const handleHome = ()=>{
  setHome(false)
}
  
const fixHome = ()=>{
  setHome(true)
}


  return(

    <div>
      <Router >
      <div className = 'topdiv' >
      <img  src = {doggo} style = {{width: '75px', marginTop:'10px'}} />
      <h2> Pawsibility Training</h2>
      </div>


        <Navbar className={"navstyle"} bg="ligt" style = {{backgroundColor: '#56A3A6'}} variant="light">
   
          {/* <Navbar.Brand className ='logo' href="/"><img  src = {doggo} style = {{width: '30px'}} /></Navbar.Brand> */}
          <Nav>
            <Nav.Link onClick = {fixHome} className = 'navitem'  href="/" style = {home? {color: '#091010'}: {color: '#2b5153'}} >Home</Nav.Link>
            <Nav.Link onClick = {handleHome} className = 'navitem' href="/about">AboutMAN</Nav.Link>
            <Nav.Link onClick = {handleHome}className = 'navitem' href="/services">ServicesDOG</Nav.Link>
            <Nav.Link onClick = {handleHome}href="/contact">Contact</Nav.Link>
          </Nav>

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