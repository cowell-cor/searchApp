# `Search App` — using Angular JS 1.7x

Search the persons in the given list of data, clicking on the selected person will show the rating, description details and send message can be triggered.

## Getting Started

To get you started you can simply clone the `repo` repository and install the dependencies:```
git clone https://github.com/cowell-cor/searchApp.git


### Install Dependencies

`npm install`

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:```

`npm start`

Now browse to the app at [`localhost:8000`].


### Components
It consists of header, side-panel, right-panel and send-message components. Each component is reusable containing its own template, css, controller and service.```
