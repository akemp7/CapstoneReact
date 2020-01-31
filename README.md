# _A Language Database of Summaries_

#### _The Capstone Project for Epicodus_

#### By _Anita Kemp_

## Description
This application prompts a user to watch a video and then summarize what happened afterwards. A researcher can then see a list of summaries and query by word, phrase, or letter, in order to find language patterns. Part of Speech (POS) tagging has been implemented (from an npm package) in order to also allow the researcher to query by noun, verb, adjective, etc. 

Currently this is all frontend with React. However, in the future there will also be an API built with C#. 

## Component Diagram
This demonstrates how state is lifted in this React application.
<img src="src/Assets/ComponentDiagram.png"/>

### Stretch Goals:
* _Authentication_
* _API call in order to POST to database as well as GET summaries_
* _Voice recording as opposed to text summaries in order to avoid potential hypercorrections of grammar on part of user_
* _Enabling search functionality for POS tagging_

## User Stories

_As a researcher_:
    - I want the user to input summary based on a video (for now, to control variability)
    - I want the user to input language background 
    - I want the ability to query user input that has been stored in an API

_As a user_:
    - Users should be able to summarize what happened in video either by text or by audio.

## Setup/Installation Requirements
* _Clone this repository_
* _Run the command: npm i_ to install node_modules
* _Then run the command: npm run start_
* _Navigate to localhost:8080_

## Support and contact details

_Please leave a comment on this repository if there are any questions._

## Technologies Used
 JavaScript, React, HTML, CSS

### License

*MIT*

Copyright (c) 2019 **_Anita Kemp_**



