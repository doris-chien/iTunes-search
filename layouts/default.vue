<template>
  <div class="bg-gray-400">
    <Navigation />
    <section class="w-full min-h-screen flex items-center">
    <div class="container mx-auto bg-white rounded shadow-2xl p-8 my-4">
      <nuxt />
    </div>
  </section>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation'
export default {
  components: {
    Navigation,
  }
}
</script>

<style>
html {
  background-color: theme('colors.white');
  font-family: theme('fontFamily.sans');
}
</style>
