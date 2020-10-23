import React, { Component } from 'react'
import './Front.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AOS from 'aos'
import 'aos/dist/aos.css';

class Front extends Component{
    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
        return (
            <div className = "frontBox">
                <div data-aos='fade-down' className = "mainName">
                    <h1>Baron Huang</h1>
                    <h4 style = {{fontSize: "3vh"}}>I am a junior majoring in computer science at the University at Buffalo. <br/>I enjoy biking, listening to music, and cooking delicious meals.</h4>
                    <a href = 'https://github.com/huangbaron2' style = {{color: "white"}}><GitHubIcon /></a> <a href = 'https://www.linkedin.com/in/huangbaron2/' style = {{color: "white"}}><LinkedInIcon fontSize="medium"/></a>
                    <br/>
                    <a href = 'https://drive.google.com/file/d/11yLUxe75M1xRO3VYP2x0H240BxCgaHnB/view?usp=sharing' className = "resumeBTN">Resume</a>
                   <div  className = "jmpPBTN"><a href= '#ProjectsBox' className = "jmpPBTN_a">Projects<br/><ArrowDropDownIcon style = {{fontSize: "5vh"}}/></a></div> 
                </div>
            </div>
        );
    }
}

export default Front;