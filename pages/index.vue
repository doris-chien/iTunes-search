<template>
  <div>
    <h3 class="text-4xl text-center border-solid border-b-2 mb-6 text-teal-700">Search iTunes</h3>
      
    <form class="w-full max-w-sm mx-auto my-6" @submit.prevent="submit" >
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input v-model="search" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Artise Name" aria-label="Full name">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      search:''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`);
    }
  },
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  }
}
</script>
