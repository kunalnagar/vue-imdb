<template>
  <li>
    <img :src="item.img" />
    <br />
    <div>
      <a :href="itemLink" class="title" target="_blank" title="View on IMDb">{{ item.name }}</a>
      <div class="d-flex items-center area muted">
        <p class="year">{{ item.year }}</p>
        <p class="separator runtime">{{ runtime }}</p>
        <p class="separator certificate">{{ item.certificate }}</p>
        <p class="separator genres">{{ genres }}</p>
      </div>
      <p class="area plot">{{ item.plot }}</p>
      <div class="d-flex items-center area">
        <p class="rating" title="Rating" v-show="item.rating">
          <span class="rating--star"></span>
          {{ item.rating }}
        </p>
        <p class="metascore" title="Metascore" v-show="item.metascore">
          <span class="metascore--color" :class="metascoreColor">
            {{
            item.metascore
            }}
          </span>
        </p>
      </div>
      <div class="d-flex items-center area">
        <span>Director(s):</span>
        <ul class="directors">
          <li v-for="(director, index) in item.directors" :key="index">
            <a
              :href="directorLink(director)"
              target="_blank"
              title="View on IMDb"
            >{{ director.name }}</a>
          </li>
        </ul>
      </div>
      <div class="d-flex items-center area">
        <span>Star(s):</span>
        <ul class="stars">
          <li v-for="(star, index) in item.stars" :key="index">
            <a :href="starLink(star)" target="_blank" title="View on IMDb">{{ star.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    runtime: function () {
      var _hours, _minutes
      _hours = parseInt(this.item.runtime / 3600)
      _minutes = parseInt((this.item.runtime % 3600) / 60)
      return _hours + 'h ' + _minutes + 'm'
    },
    genres: function () {
      var _genres = []
      this.item.genres.forEach(function (genre) {
        _genres.push(genre.name)
      })
      return _genres.join(', ')
    },
    metascoreColor: function () {
      if (this.item.metascore >= 61) {
        return 'color--metascore-green'
      } else if (this.item.metascore >= 40 && this.item.metascore <= 60) {
        return 'color--metascore-yellow'
      } else {
        return 'color--metascore-red'
      }
    },
    itemLink: function () {
      return this.item.baseUrl + this.item.link
    },
  },
  methods: {
    directorLink: function (director) {
      return this.item.baseUrl + director.link
    },
    starLink: function (star) {
      return this.item.baseUrl + star.link
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/utils';

li {
  display: flex;
  align-items: flex-start;
  padding: 1em;

  &:hover {
    background-color: #ececec;
  }
}

a {
  color: black;
}

img {
  height: 170px;
  margin-right: 1em;
}

.muted {
  font-size: 0.8em;
  color: lighten(black, 60%);
}

p {
  margin: 0;
}

.title {
  font-size: 1.2em;
}

.plot {
  color: lighten(black, 20%);
}

.rating {
  color: lighten(black, 40%);
  font-size: 0.9em;
  display: flex;
  align-items: center;

  &--star {
    background: url(https://m.media-amazon.com/images/G/01/imdb/images/listo/sprite-2426358703._V_.png)
      no-repeat 0 -241px;
    display: inline-block;
    height: 12px;
    margin-right: 0.3em;
    vertical-align: middle;
    width: 12px;
  }
}

.metascore {
  margin-left: 1em;

  &--color {
    color: white;
    padding: 0.1em 0.3em;
    font-size: 0.8em;
  }
}
.directors,
.stars {
  padding: 0;
  margin-left: 0.3em;

  li {
    margin-left: 0.3em;
    padding: 0;
    display: inline;
  }
}
</style>
