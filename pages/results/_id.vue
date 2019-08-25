<template>
  <div>
    <h3 class="text-4xl text-center border-solid border-b-2 mb-6 text-gray-700">Resules For {{$route.params.id}}</h3>
    <div v-if="albumExists">
      <div v-for="(album, index) in albumData">
        <postList
          :title="album.collectionCensoredName"
          :image="album.artworkUrl100"
          :artisName="album.artistName"
          :url="album.collectionViewUrl"
          :artisUrl="album.artisViewUrl"
          :summary="album.copyright"
        />
      </div>
    </div>
    <div v-else >
      <h2>Could Not Find Album</h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import postList from '~/components/postList'
export default {
  asyncData({params}) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then((response) => {
        return {albumData: response.data.results}
      });
  },
  components: {
    postList
  },
  middleware: 'search',
  computed: {
    albumExists() {
      return this.albumData.length > 0;
    }
  }
}
</script>