import axios from "axios";

const api = {
  key: `25297840-2deb4966ec7a9ff1048a05184`,
  uri: `https://pixabay.com/api/`,
  theme: {
    fractals: 'fractals',
    nature: 'natures',
    space: 'stars',
    mounts: 'mounts',
    ocean: 'ocean',
    planets: 'planets',
  }
}

let data = axios.get(`${api.uri}?key=${api.key}&=${api.theme.fractals}`).then(d => data = d);
export { data };