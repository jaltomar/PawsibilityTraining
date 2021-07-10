import React from 'react'
import faith from './img/faithabout.jpeg'


class About extends React.Component{



    render(){
        return(
            <div style = {{textAlign: 'center'}}>



            <div className = 'leadtraindiv' style = {{marginRight: '50px'}}>
                <img src = {faith} className = 'leadtrainimg' alt = 'faith'/>
            </div>
            <div className = 'leadtraindiv' style = {{width: '400px'}}>
                <h3 style = {{textAlign: 'left', }}>Lead Trainer: Faith Altomare</h3><br/>
                <p style = {{fontSize: '20px', textAlign: 'left'}}>Faith Altomare has been around a myriad of animals her entire life. She first connected to animals through horseback riding, and enjoys casual trail rides still today. In her late teens, she became increasingly involved with her local dog rescue. She spent time with different types of dogs with different stories, many of whom were not immediately adoptable. Through fostering these dogs, Faith learned how to work through a variety of behavioral challenges that the dogs presented. She has been working with dogs and owners for over 7 years. Faith emphasizes the importance of both patience and consistency when working with a dog. </p>
            </div>
            <br/><br/>
 


            </div>


        )
    }
}



export default About