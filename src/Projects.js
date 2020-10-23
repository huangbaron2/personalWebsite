import React, { Component } from 'react'
import './Projects.css'
import { Card } from 'antd';
import Homelessness from './img/homelessness.png'
import WearAPI from './img/wearapi.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const { Meta } = Card;

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
        AOS.init();
            return (
            <div id = 'ProjectsBox' className = 'ProjectsBox'>
                <div className = "projectsList">
                    <div data-aos='fade-right' className = "Project">
                        <img src = {Homelessness} style = {{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", width: "20vw", height: "30vh"}}></img>
                        <h1 className = "projectTitle">Homelessness in NYC</h1>
                        <h1 className = "projectDescription">A HTML front-end with a Bottle.py backend that serves to grab homelessness data from the the CityofNewYork's API and display it.</h1>
                        <a className = "projectLink" href = 'https://autolab-p2--huangb2.repl.co/'>See More</a>
                    </div>
                    <div data-aos='fade-left' className = "Project_2">
                        <img src = {WearAPI} style = {{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", width: "20vw", height: "30vh"}}></img>
                        <h1 className = "projectTitle">Wear API</h1>
                        <h1 className = "projectDescription">Made with React, Express.js, MongoDB Atlas and hosted on AWS Lighthouse.The API serves the front-end but also can be used for public clothing searches. Work in progress.</h1>
                        <a className = "projectLink" href = 'http://baronswearapi.com:3000'>See More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;