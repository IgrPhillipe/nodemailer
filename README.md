This repository was created to demonstrate how to use nodemailer.

# Getting started
To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org) installed on your computer. From your command line:
```bash
# Clone this repository
git clone https://github.com/IgrPhillipe/nodemailer.git

#Go into the server
cd nodemailer/server
```
Before starting the server you need to create a dotenv file and add the following information:
```bash
EMAIL=<your email>
PASSWORD=<your password>
```
Now you:
```bash
# Install dependencies
yarn install

# Run the server
node index.js

# Open another terminal and go into the client
cd nodemailer/client

# Install dependencies
yarn install

# Run the client
yarn start
```

Now you can go to ```http://localhost:3000/``` fill out the form, submit and check if you received the email.
