# Telana templates & EE

##Stack

  - Grunt
  - Assemble for static templates
  - Bower for 3rd party libraries
  - ES6 + Babel
  - EE for CMS

## Installation/Setup

### Frontend Build

- Requires node/npm ([installation instruction](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))
- Install [Grunt](http://gruntjs.com) globally (`npm install -g grunt-cli`)
- Install NPM packages from the root of the project (`npm install`)

### ExpressionEngine

- Create a MySQL database and populate with a dump from QA or production
- Copy `ee/.env.sample.php` to `ee/.env.php` and change values to match your setup
- Create an Apache virtual host entry pointing to the `dist/` directory as the web root
- Run `./scripts/setup.sh` to setup an uploads directory and proper permissions
- Run `./scripts/sync.sh` to sync the QA database and uploads directory to your local dev environment

## Usage

Run the following commands from withing the project:

- `grunt` - Runs a dev build that symlinks EE files into `dist`
- `grunt server` - Runs a local server and watch task
- `grunt watch` - Runs a watch task on front-end assets
- `grunt buildProduction` - Runs a production build with EE

## Running locally with Docker

- Install [boot2docker.io](boot2docker.io) - `brew install boot2docker`
- Initialize boot2docker - `boot2docker init`
- Start boot2docker virtual image - `boot2docker up`
- Initialize your shell environment - `eval "$(boot2docker shellinit)"`
- Install [docker](http://docker.io)
- Install [docker-compose](http://docs.docker.com/installation/mac/)
  - `cd` into the project directory
  - `docker-compose build`
  - `docker-compose up`
  - `open $(boot2docker ip)` - to open the correct IP in a browser

  To stop the docker containers, hit `ctrl+c`.  Start the containers again with
  `docker-compose up`.

  On first setup locally, you will need to connect to mysql via:

## Deployment

We are deploying with Mina and CircleCI.

### Setup

- `gem install bundler` - Install [Bundler](http://bundler.io) if not already installed
- `bundle install` - Run this from the root of the project to install dependencies

### Deploy

Run these commands from within the project root.

- `mina deploy` - Deploy to the **staging** environment: [http://new.meandmountains.com](http://new.meandmountains.com)

- `mina deploy on=production` Deploy to the **production** environment: [http://meandmountains.com](http://meandmountains.com)


### Known Issues

If you run into an `ssh` error something like: `Received disconnect from 72.9.40.135: 2: Too many authentication failures` you are probably sending too many keys at the server.

To fix this, creat a `~/.ssh/config` entry on your machine that looks like this:

```
Host 72.9.40.135
  User u86086779
  PreferredAuthentications password
```

The `PreferredAuthentications` is the important bit here. It makes `ssh` prompt for a password *before* prompting for keys.

## Contributing

- Prefix commit messages with one of (ie. "feat: add new slider widget"):
    - feat: When adding a feature/improvement
    - fix: When fixing code
    - refactor: When refactoring code
    - docs: When adding/updating documentation
    - test: When creating/updating tests
    - style: When making code style changes
    - chore: When doing anything else not directly related to code (ie. changes to your build)
