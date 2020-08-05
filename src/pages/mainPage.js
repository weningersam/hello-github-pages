import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as constants from '../constants/constants.js';
import MainPageHeader from '../components/mainPageHeader.js';

export default class MainPage extends Component{

    render(){
        return (
            <div>
                <MainPageHeader/>
                <Tabs>
                    <TabList style={{textAlign: "center"}}>
                        <Tab>About Me</Tab>
                        <Tab>Example Projects</Tab>
                        <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                        <p>I am looking for a job that will pay me money. Graphic design is my passion.</p>
                    </TabPanel>
                    <TabPanel>
                        <Link to={"/example/0"} target="_blank" >Link to project 0</Link>
                        <br/>
                        <Link to={"/example/1"} target="_blank">Link to project 1</Link>
                    </TabPanel>
                    <TabPanel>
                        <p>Carrier Pigeon</p>
                    </TabPanel>
                </Tabs>
                
            </div>
        );
    }

}