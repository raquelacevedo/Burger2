# Burger2
# Tutorial on What is Burger2 and how To get Burger2 up and Running

------------------------------------------------------------------------------------------------------------------------------

## User Story

In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and 
password.  Burger2 offers users a way to safely create an account by using an email and a password that is safely stored into a
database.  Because of this authentication process users do not have to worry about their personal details used in creating an
account.

------------------------------------------------------------------------------------------------------------------------------

## Password Authentication

This app allows users to create an account, log into the account and sign back out securely using Passport. All user data is 
stored in a mysql database.

------------------------------------------------------------------------------------------------------------------------------

## Technologies Used

* BCRYPTJS
* EXPRESS
* EXPRESS-SESSION
* MYSQL2
* PASSPORT
* PASSPORT-LOCAL
* SEQUELIZE

------------------------------------------------------------------------------------------------------------------------------

## Getting Started

To begin using Burger2, please clone this repository into your local storage. Once this is complete, please follow these steps;

1) In mysql, create a mysql db called "passport_demo" by executing the schema.sql file in the develop folder.
2) Go into the config file, open config.js and insert your mysql root user information for username and password.
3) Open terminal in current repo and from the develop folder run "npm install" to install all the dependencies listed in package.json
4) While in terminal, run "node server.js" in order to successfully connect to your local server
5) Open browser and type in the following url "http://localhost:8080" in the browser bar
6) Create and account and then log into the app.
7) Once you log into the app you will land on a members page where you will be welcomed.
8) Smile and enjoy using the app!

------------------------------------------------------------------------------------------------------------------------------

## What files make up Burger2 ?

CONFIG

  MIDDLEWARE

    isAuthenticated.js { 
    restricts routes that user is not allowed to visit if not logged in. if user is logged in, it continues with request };

  config.json {
  connection configuration to connect to server };

  passport.js {
  contains javascript logic that tells passport we want to log in with an email address and password };

MODELS

  index.js {
  connects to database and imports users log in data };

  user.js {
  requires "bcrypt" for password hashing. this makes our database secure even if compromised. Here we have JS that defines what is stored on our database };

ROUTES

  api-routes.js { 
  contains routes for signing in, logging out and getting users specific data to be displayed client side };

  html-routes.js {
  routes that check whether user is signed in, whether user already has account etc and sends them tio the correct html page };

package.json {
contains all package info, node modules used, version info etc };

server.js {
requires packages, sets up PORT, creates express and middleware, creates routes and syncs database / logs message in terminal on successful connection to server };

------------------------------------------------------------------------------------------------------------------------------
