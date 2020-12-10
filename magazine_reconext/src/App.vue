<template>
  <v-app>

    <vue-page-transition>
      <router-view />
    </vue-page-transition>


  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: () => ({
      //
    }),
  };
</script>