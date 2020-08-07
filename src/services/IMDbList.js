import axios from 'axios'

export default {
  getWatchList() {
    return axios
      .get('/watchlist/ur39600768')
      .then((response) => {
        return response
      })
      .catch((err) => {
        throw new Error(err)
      })
  },
}
