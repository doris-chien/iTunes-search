
import axios from 'axios';
export default async function( {params, store} ){
  const response = await axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`);
  store.commit('add', response.data.results);
}