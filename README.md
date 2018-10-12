# blog-mern

A MERN blog hosted on heroku

## Website

The website is hosted on heroku pages: [blog-mern](https://joaopedrodcf.github.io/blog-react)

## Functionalities

- [x] Contact me: sends emails
- [x] Register: creating user with password encrypted with bcrypt
- [x] Login: JWT request the token with the token that is saved in local storage
- [x] Posts: Its working with pagination, showing all the posts separated by pages
- [x] Protected routes: If user is authenticated can access /login or /register
- [x] Create posts: Users loggedin can create posts
- [x] Create posts: Image upload through cloudinary
- [x] Create posts: Shows the email of the user who created it
- [x] Posts: Users can comment posts
- [x] Error messages: When user submits recieves an alert
- [ ] NavBar: Create a dropdown with user profile and logout
- [ ] Posts: Like button(A user can only like one time per post)
- [ ] Comments: Comment form should only appear if loggedin
- [ ] Comments: Create redux actions for this
- [ ] Asked funcionality: Favicon
- [ ] Asked funcionality: Show appname on broser
- [ ] Asked funcionality: Hash of password in front end(Before the request) !?
- [ ] Asked funcioanlity: Rules for a complex password(uppercase, lowercase, one number, etc)

## Getting Started

First clone the project

```shell
git clone https://github.com/joaopedrodcf/blog-mern.git
```

Then install the node_modules

```shell
yarn
```

Finally you can start dev enviroment

```shell
yarn start
```

For running in prod enviroment create build

```shell
yarn heroku-postbuild
```

Then run

```shell
yarn start:prod
```

Now its ready to use

## The project is ready to run in heroku you just need to add the follwing command

Without this the create-react-app build will not be successful

```shell
heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

## Enviroment variables needed

For cloudinary

```vars
API_KEY
API_SECRET
CLOUD_NAME
```

For MLAB

```vars
DB
```

For Nodemailer

```vars
GMAIL_PASSWORD
GMAIL_USER
```

For JWT

```vars
SECRET
```
