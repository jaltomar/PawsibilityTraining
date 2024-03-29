import React from "react";
// import dogpic from './img/DexSky.jpeg'
import dogpic from "./img/licky.png";
import dexanddog from "./img/smol.jpg";
import faithinpen from "./img/Watchme.png";
import cutepup from "./img/cutepup.jpg";
import goldie from "./img/lookupdog.jpeg";

class Home extends React.Component {
  componentDidMount() {
    this.props.handsel("mehome");
  }

  //color: '#2b5153' is color of darkest cyan in nav bar text

  render() {
    window.scrollTo(0, 0);
    return (
      <div style={{ textAlign: "center", color: "#482728" }}>
        <div className="homepicdiv">
          <div className="hometext1div">
            <h3 className="hometext1">
              {" "}
              Learn how to strengthen the relationship with your dog so that you
              are both happier. Discover what's pawsible today.{" "}
            </h3>
          </div>

          <div className="homepicdiv">
            <img className="homepic" width="100%" src={goldie} alt="goldie" />
          </div>
        </div>
        <br />

        <div
          style={{
            display: "block",
            width: "100%",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <p className="myText">
            {" "}
            Do you find yourself frustrated with your furry friend? Are there
            days when your dog pushes all of your buttons? Is your puppy
            terrorizing you with her razor sharp teeth? Are you having trouble
            teaching your dog to use the outside potty? Do you want your dog to
            learn unique and fun tricks? Let us help you and your dog grow
            together.{" "}
          </p>

          <br />
          <h3
            style={{
              padding: "1% 0 1% 0",
              width: "60%",
              minWidth: "325px",
              margin: "auto",
            }}
          >
            Serving in Bucks County
          </h3>

          <img src={dogpic} className="hickFaith" alt="faith and dog pic" />
          <br />
          <p className="myText">
            <h3 style={{ textAlign: "center" }}>
              Private, individualized training
            </h3>
            Pawsibility Training works to meet you and your dog’s specific
            needs. With our individualized and private 1-on-1 sessions, you will
            learn how to better work with your dog and practice techniques to
            improve their behavior. Through positive reinforcement training, we
            can teach your dog, and encourage desired behaviors while
            eliminating unwanted behaviors.
          </p>
          {/* <br/> */}
        </div>

        {/* <div className = 'blackbox'> */}
        <div className="multpic">
          <div className="rowpic">
            <img className="pic" src={dexanddog} alt="dexanddog" />
          </div>
          <div className="rowpic">
            <img className="pic" src={faithinpen} alt="faithinpen" />
          </div>
          {/* <div className= 'rowpic'> 
                            <img className = 'pic' src = {cutepup} alt = 'cutepup'/>
                        </div> */}
        </div>
        {/* </div> */}

        <br />

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "50%",
              minWidth: "350px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            <div
              style={{
                fontSize: "18pt",
                marginBottom: "20px",
                display: "inline-block",
                verticalAlign: "top",
                marginRight: "0%",
                marginLeft: "0%",
                textAlign: "center",
              }}
            >
              <h3>Expertise</h3>
              <div style={{ display: "inline-block", fontSize: "16pt" }}>
                <ul style={{ paddingLeft: "25px" }}>
                  <li>
                    <span> Potty training</span>
                  </li>
                  <li>
                    <span> Teething</span>{" "}
                  </li>
                  <li>
                    <span>Mouthing</span>
                  </li>
                  <li>
                    <span>Leash walking</span>
                  </li>
                  <li>
                    <span>Recall</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: "inline-block", fontSize: "16pt" }}>
                <ul>
                  <li>
                    {" "}
                    <span> Crate training</span>
                  </li>
                  <li>
                    <span>Nail trimming</span>
                  </li>
                  <li>
                    <span>Ear cleaning</span>
                  </li>
                  <li>
                    <span>Trick training</span>
                  </li>
                  <li>
                    <span>And more</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              minWidth: "350px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "100%",
                verticalAlign: "top",
                textAlign: "center",
                marginRight: "0%",
                marginLeft: "0%",
              }}
            >
              <div style={{ maxWidth: "500px", margin: "auto" }}>
                <p style={{ fontSize: "16pt", textAlign: "left" }}>
                  <h3 style={{ textAlign: "center" }}> Getting started</h3>
                  Consult: Before we can create an individualized plan to help
                  you and your dog, we want to get to know your dog and her
                  behaviors. During our 30 minute consultation, we will ask you
                  questions about your goals and pet’s history as well as
                  observe your dog’s current behaviors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div width="60%" style={{ minWidth: "350x" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0 20px 0 20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "16pt", display: "inline" }}>
              {" "}
              Ready to start? Check out our{" "}
              <a href="#services" name="meservices">
                {" "}
                services
              </a>
            </p>
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "0 20px 0 20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "16pt", display: "inline" }}>
              Got questions?{" "}
              <a name="mecontact" href="#contact">
                {" "}
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
