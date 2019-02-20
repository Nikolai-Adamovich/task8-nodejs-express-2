#### Heroku deletes devDependencies after installation. How to avoid this?

- Install [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Login to heroku
```heroku login```
- Set variable *NPM_CONFIG_PRODUCTION* to **false**
```heroku config:set NPM_CONFIG_PRODUCTION=false --app your-application-name```