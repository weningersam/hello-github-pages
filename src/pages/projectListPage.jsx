import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//import * as constants from '../constants/constants.js';

export default function ProjectsListPage() {
    return (
        <div>
            <h1>List of projects</h1>
            <Link to={"/example/0"} target="_blank" >Link to project 0</Link>
            <br/>
            <Link to={"/example/1"} target="_blank">Link to project 1</Link>
        </div>
    );
}