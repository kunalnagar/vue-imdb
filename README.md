# vue-imdb

![](https://i.imgur.com/4rGeqOc.png)

A Vue component to render an IMDb watchlist

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
