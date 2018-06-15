## StartupDetroit

Welcome to [StartupDetroit](http://www.startupdetroit.co/). This is an open source approach to building the Detroit Startup Community. Our goal is to tie together the greater Detroit startup community and be a central hub for startups and tech. Read on to learn how to contribute!

### Join Slack Community
To join the [Slack community](https://startupdetroit.slack.com/) go to [https://startupdetroit.herokuapp.com/](https://startupdetroit.herokuapp.com/) to get an invite. This is managed thanks to a [rauchg/slackin](https://github.com/rauchg/slackin) instance, hosted on [Heroku](https://heroku.com/).

### How to Contribute

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/startupdetroit/www/pulls).



### Feature requests, found a bug, or have an idea?
Create an [issue](https://github.com/startupdetroit/www/issues)

## Want to add your startup or organization's logo?
You can:

Submit an [issue](https://github.com/startupdetroit/www/issues/new) titled "Add [Name] Logo". In the description, include:
 1. A link to your logo
 2. The city your org is based in (ex: Royal Oak, MI)
 3. Website link 
 4. The type of supporter you are (Startup, Community Supporter, Investor)

Or, you can:
1. Add the logo in the [src/static/img/logos folder](https://github.com/startupdetroit/www/tree/master/src/static/img/logos). Follow the naming convention of logo-[name].
2. Import the logo in the [src/components/Community.js](https://github.com/startupdetroit/www/blob/master/src/components/Community.js) file by adding this line at the top
  ```
  import logoName from '../static/img/logos/logo-name.png';
  ```
3. Add the logo in alphabetical order in the [same file](https://github.com/startupdetroit/www/blob/master/src/components/Community.js), as shown below.

  ```
  <Logo
  src={logoName}
  location="Detroit, MI"
  href="http://www.example.com"
  name="Logo"
  type="Startup, Community Supporter, or Investor"
/>
  ```
4. Submit a pull request


### Local Development

Getting started:
- [Download and install Yarn](https://yarnpkg.com/en/docs/install) if you haven't already.
- Run the following commands to clone the repository, install packages and launch in your browser
```
git clone https://github.com/startupdetroit/www
cd www
yarn install
yarn start
```

Build:

```
yarn run build
```

Deploy:

```
yarn run deploy
```

### Technologies Used

* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Bulma](http://bulma.io)
* [Styled Components](http://styled-components.com)


### Contributors

* [Ted Serbinski](www.tedserbinski.com)
* [Shriyash Jalukar](www.shriyash.io)
* [Andrew Mager](http://jessicakrcmarik.com/)
* [Kelsey Trabue](http://klsy.co/)
