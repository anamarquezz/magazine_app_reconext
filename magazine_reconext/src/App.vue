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

    data() {
      return {
     
        };
    },
  };
</script>
<style scoped>

#app{   
    height: 100vh; 
    background: rgb(41, 41, 41) !important;
   
}
</style>