# blog-mern

A MERN blog hosted on heroku

## Website

The website is hosted on heroku pages: [blog-mern](https://joaopedrodcf.github.io/blog-react)

## Functionalities

- [x] Contact me: sends emails
- [x] Register: creating user with password encrypted with bcrypt
- [x] Login: JWT request the token with the token that is saved in local storage
- [x] Protected routes: If user is authenticated can access /login or /register
- [x] Create posts: Users loggedin can create posts
- [x] Create posts: Image upload through cloudinary
- [x] Create posts: Shows the email of the user who created it
- [x] Posts: Users can comment posts
- [x] Error messages: When user submits recieves an alert
- [x] Comments: Comment form should only appear if loggedin
- [x] Comments: Create redux actions for this
- [ ] NavBar: Create a dropdown with user profile and logout
- [ ] Posts: Like button(A user can only like one time per post)
- [ ] Asked funcionality: Favicon
- [ ] Asked funcionality: Show appname on broser
- [ ] Asked funcionality: Hash of password in front end(Before the request) !?
- [ ] Asked funcioanlity: Rules for a complex password(uppercase, lowercase, one number, etc)

## Before you start

Enviroment variables are needed to have the funcionalities working:

- Create the file `.env` the path must be this: `blog-mern/server/.env`
- Insert the follwing info

```env
ENDPOINT=http://localhost:3000
```

### JWT authentication

- Decide a secret key that you will use to create the token to be used in JWT
- This key can be anything ex: <MY_SECRET_KEY>
- Open `.env` and insert one line, with your own info

```.env
SECRET=<MY_SECRET_KEY>
```

### Host Mongo DB

- Create an account in mlab webiste `(It's FREE!)` here: [mlab](https://mlab.com/)
- After you have successefully loggedin you will see the home screen
- On mongo deployments click on `create new` and choose the plan type `sandbox`
- Click continue
- Now choose the region more close to you, in my case europe
- Click continue
- Now choose the database name it can be anything ex: blogmerndb
- Then click continue
- In the final screen you will see the final information
- Then click submit order
- Go into the home and you will see your database created
- Click on it
- And you will see this info `To connect using a driver via the standard MongoDB URI`
- Yours will be similar to mine: `mongodb://<dbuser>:<dbpassword>@sfsafsfsf.mlab.com:55970/blogmerndb`
- Open `.env` and insert a new line, with your own info
- Dont forget to change the `dbuser` and `dbpassword` the you login information in mlab

```.env
DB=<PAST_AND_CHANGE_HERE_WHAT_NEEDED>
```

### Host images

- Create an account in cloudinary webiste `(It's FREE!)` here: [cloudinary](https://cloudinary.com)
- After you have successefully loggedin you will see the dashboard, there is a section named account details
- Open `.env` and insert three new lines, with your own info

```.env
CLOUD_NAME=<CLOUD_NAME>
API_KEY=<API_KEY>
API_SECRET=<API_SECRET>
```

### Gmail configuration

- Create an account in gmail webiste `(It's FREE!)` here: [gmail](https://gmail.com)
- As this only impacts the send email feature will one referece the guide from the lib that i'm using: [nodemailer guide gmail](https://nodemailer.com/usage/using-gmail)
- Basically you need to create an applicational token for your gmail account
- And that is the password that you will use
- When you get the gmail user and password
- Open `.env` and insert two new lines, with your own info

```.env
GMAIL_USER=<YOUR_GMAIL_EMAIL>
GMAIL_PASSWORD=<YOUR_APPLICATIONAL_TOKEN>
```

### In the end

- You should end with a config file like this, with all the information filled
- You are ready to start working

```vars
SECRET=
ENDPOINT=http://localhost:3000
DB=
GMAIL_USER=
GMAIL_PASSWORD=
CLOUD_NAME=
API_KEY=
API_SECRET=
```

## How to run locally

First clone the project

```shell
git clone https://github.com/joaopedrodcf/blog-mern.git
```

Then install the node_modules (this installs the server and the client)

```shell
yarn
```

Finally you can start dev enviroment

```shell
yarn start
```

## How to run in production

First clone the project

```shell
git clone https://github.com/joaopedrodcf/blog-mern.git
```

Then install the node_modules (this installs the server and the client)

```shell
yarn
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