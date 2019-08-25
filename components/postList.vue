<template>
  <section>
    <a :href="url" target="_blank" >
      <div class="max-w-sm w-full lg:max-w-full lg:flex bg-gray-200 rounded-b lg:rounded-b-none lg:rounded-r shadow mb-5">
        <div class="h-48 w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{ 'background-image': 'url(' + image + ')' }" title="Woman holding a mug">
        </div>
        <div class=" p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{{title}}</div>
            <p class="text-gray-700 text-base">{{summary}}</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" :src="image" alt="Avatar of Jonathan Reinink">
            <div class="text-sm">
              <a :href="artisUrl" target="_blank" >
                <p class="text-gray-900 leading-none">{{artisName}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  </section>
  
</template>

<script>
export default {
  props: ['title', 'image', 'artisName', 'url', 'artisUrl', 'summary']
}
</script>
