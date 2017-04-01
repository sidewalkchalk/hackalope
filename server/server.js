import Express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

// React and Redux setup
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router';

// Import required modules
import routes from './routes';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDb Connection
mongoose.connect('mongodb://localhost:27017', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

// Initalize the Express App
var app = new Express();
var port = process.env.port || 8000; // also in serverConfig

// Summon Satan
app.listen(port, function () {
  console.log('Lucifer is listening on port: ' + port + ' Build like hell!');
});
