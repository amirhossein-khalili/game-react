import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a0e9a54bbba54995975597649ba8ce14',
  },
});
