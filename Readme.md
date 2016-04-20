# Fremja

This is a fairly simple Todo application, buildt with [React](https://facebook.github.io/react/), [Express](http://expressjs.com/), [MongoDB](https://www.mongodb.org/), [Browserify](http://browserify.org/) and [Docker](https://www.docker.com/).

## Getting started

This application has one external dependency, which is a [MongoDB](https://www.mongodb.org/) installation. The installation URI is per default:

    mongodb://192.168.99.100:27017

You can provide your own with the parameter in the example below:

    set MONGODB mongodb://<IP>:27017
    npm start

A third option is to use [Docker](https://www.docker.com/) to setup the application, this is done with the command:

    docker-compose up

## Using the application

Now depending on your [Docker](https://www.docker.com/) installation, the application can be found on the URL:

    http://<ip>:3000

## Versions

<!-- ### 0.3.0 Kick-off-continues (Currently underway) -->

<!-- * Access tasks from the Google Task list. -->

### 0.2.0 Kick-off

This is a simple Todo Application with the following features:

* A user can see a list of tasks, so he/she can get an overview of all tasks.
* A user can add a new task to the list, so he/she doesn't forget it later.
* A user can mark a task as finished, so he/she can see in the list, that I don’t have to worry about it anymore.
* A user can remove a task from the list, so it doesn’t confuse his/her overview page, with a task that is not relevant anymore.
* The user can close his/her browser and come back later and see the todo list.
