import React from 'react'
// import faith from './img/faithabout.jpeg'
// import faith from './img/weirdsmile.png'
// import faith from './img/licky.png'
import faith from './img/finalhug.jpg'


class About extends React.Component{

    componentDidMount(){
        this.props.handsel('meabout')
        console.log('about mounted')
    }

    render(){
        window.scrollTo(0,0)
        return(
            <div style = {{textAlign: 'center'}}>
{/* <h1>hi</h1> */}


            <div className = 'leadtraindiv' style = {{width: '45%', overflow: 'hidden', padding: '0 0% 0 0%'}} >
                <img src = {faith} className = 'leadtrainimg' alt = 'faith'/>
            </div>
            <div className = 'leadtraindiv' style = {{width: '40%', minWidth: '360px',   padding: '0 2% 0 2%'}}>
                <h3 style = {{textAlign: 'left', }}>Lead Trainer: Faith Altomare</h3><br/>
                <p style = {{fontSize: '16pt', textAlign: 'left'}}>Faith Altomare has been around a myriad of animals her entire life. She first connected to animals through horseback riding, and enjoys casual trail rides still today. In her late teens, she became increasingly involved with her local dog rescue. She spent time with different types of dogs with different stories, many of whom were not immediately adoptable. Through fostering these dogs, Faith learned how to work through a variety of behavioral challenges that the dogs presented. She has been working with dogs and owners for over 7 years. Faith emphasizes the importance of both patience and consistency when working with a dog. </p>
            </div>
            <br/><br/>
 


            </div>


        )
    }
}



export default About