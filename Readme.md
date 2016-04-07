# Fremja

This is a fairly simple Todo application, buildt with [React](), [Express](), [MongoDB](), [Browserify]() and [Docker]().

## Getting started

This application has one external dependency, which is a [MongoDB]() installation. The installation URI is per default:

    mongodb://192.168.99.100:27017

You can provide your own with the parameter in the example below:

    set MONGODB mongodb://<IP>:27017
    npm start

A third option is to use [Docker]() to setup the application, this is done with the command:

    docker-compose up

## Using the application

Now depending on how you installed the application, it can be found on the URL:

    http://<ip>:3000
