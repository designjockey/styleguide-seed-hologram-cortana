styleguide-seed-hologram-cortana
========

This project is a seed for a styleguide using Hologram and Cortana theme.

## Getting Started

### Bower

Install the seed project using the [Bower](http://bower.io) package manager.

```sh
$ bower install styleguide-seed-hologram-cortana
```

### npm

You can also find all the seed project on [npm](http://npmjs.org).

```sh
$ npm install styleguide-seed-hologram-cortana
```

### Installation Dependencies
You need the below to install the packages:
1. NodeJS ```brew install nodejs```
2. Bower ```npm install -g bower```
3. Grunt CLI ```npm install -g grunt-cli```

## Usage

Run the below commands after installation to install all the dependencies

```sh
$ npm install
$ bower install
$ bundle install
```

Browse to bower_components/Cortana/ in your project and run ```bower install```

Once installed, use the below command to start up the project, in a browser hooked up with livereload

```sh
$ grunt develop
```

### Known Issues

1. Cannot GET / when grunt develop is run - To fix this, go to a stylesheet and make a change which triggers compilation of the dist folder, this should take care of it.
