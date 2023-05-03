#TigerBlogs_Redux

## We will develop a blogging web application using technology stack:

Front End:
React, Redux, RTK, react-router-dom
Back End:
Node.JS

Database: MongoDB

## Scope of the Blog Web Application

1 - Users log in with username / password
2 - If the first time logging, they can create an account
3 - Users can create a blog , save, and edit the blog
4 - Users can review and give stars to other blogs
5 - Users can reply to other blogs

# Wireframe

![Figma-tiger_blogs resized](https://user-images.githubusercontent.com/41316262/236028423-e34406b6-cdda-48b6-b67e-5f731007786f.png)

## Installation

- npm install
- sudo service mongod start
- npm run start
- in browser go to localhost:3000

## Issues

- server calls to local db are getting a Network Error
- redux devTools shows nothing added to state
- Sign-in alerts "User not found" probably because the server hasn't successfully returned any.
- clicking category buttons just logs the button name to the console

## Roadmap

- add redux-logger
- debug server and DB functions
- use React-Bootstrap
- use styled components
- design web view wireframe
- implement responsive styling
- hey! maybe even rewrite your code so when taking it to scale it won't jam up your front end with functons like "getAllUsers" and "getAllPosts".
