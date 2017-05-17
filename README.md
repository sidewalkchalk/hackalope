[![Stories in Ready](https://badge.waffle.io/sidewalkchalk/hackalope.png?label=ready&title=Ready)](https://waffle.io/sidewalkchalk/hackalope)
# hackalope.io

> Share, save, submit, and vote on user-submitted coding resources

## Team

  - __Product Owner__: Daniel Ricaud
  - __Scrum Master__: James Kip
  - __Development Team Members__: Carla J. Clay, Tyler Holzer

## Table of Contents

1. [Usage](#Usage)
1. [Stack](#stack)
1. [Installing Dependencies](#installing-dependencies)
1. [Development](#development)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> There are hundreds of great websites and resources dedicated to teaching content and helping the developer community. There are so many, in fact, that it is often difficult to find the best resources and those who are new to coding can spend hours trying to find the ones that meet their needs. At [hackalope.io](http://hackalope.io), users can share and search resources on a range of programming languages and topics. Users who create an account can submit and save their favorite resources, vote on resources submitted by other users, and leave feedback on resources. Search results are sorted by by the aggregate user rating, calculated by upvotes and downvotes. Users can also submit resources for consideration by hackalope moderators. Hackalope is inspired by sites like Reddit and Yelp, where the community of users generates the majority of the content.

## Stack

- React (Redux)
- MongoDB
- Node.js
- Express.js

### Installing Dependencies

```sh
npm install
```

## Development

fork/clone repo from https://github.com/sidewalkchalk/hackalope

start up mongodb with:
```sh
mongod
```

to run webpack and the node.js server:
```sh
npm start
```

the above script will set webpack to watch for changes on bundled files and will start the server with nodemon.

### Roadmap

View the project roadmap [here](https://github.com/sidewalkchalk/hackalope/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
