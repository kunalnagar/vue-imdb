# 🎬 vue-imdb

[![Known Vulnerabilities](https://snyk.io/test/github/kunalnagar/vue-imdb/badge.svg)](https://snyk.io/test/github/kunalnagar/vue-imdb)

**Current Vulnerability in [axios](https://github.com/axios/axios), fix awaited. Read more [here](https://snyk.io/blog/a-denial-of-service-vulnerability-discovered-in-the-axios-javascript-package-affecting-all-versions-of-the-popular-http-client/).**

![](https://i.imgur.com/YuCwHI2.png)

A Vue component to render an IMDb watchlist

**Note:** This component still needs to be published on NPM along with better documentation etc. Working on that still. Meanwhile, feel free to test it out using the instructions below!

## Backend

This Vue component uses a backend service that I built to scrape IMDb content. Take a look at [expressyo-imdb-scraper](https://github.com/kunalnagar/expressyo-imdb-scraper)

**Note:** It is against IMDb policies to scrape their website for content. Please DO NOT use this service in production. I built it simply as a side project and to ONLY show a watchlist on my [website](https://kunalnagar.in).

## Project setup

Once you clone the backend repo and have it running on your localhost environment, you need to edit the following variable and set it's value to your server:

```
axios.defaults.baseURL = http://localhost:8080
```

The variable can be found in the [main.js file](https://github.com/kunalnagar/vue-imdb/blob/master/src/main.js#L5)

After that, you need to install the dependencies using:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
