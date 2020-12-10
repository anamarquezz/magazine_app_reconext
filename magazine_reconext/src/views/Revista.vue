<template>
  <div class="">
    seccion:
  </div>
</template>

<script>
  // @ is an alias to /src
  //import UserNavigation from '@/components/module_menus/UserNavigation.vue'

  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    name: 'dashboard',
    components: {},
    computed: {
      ...mapState({
        secciones: "secciones"
      })
    },
    methods: {
      click_seccion(pagina) {
          this.$router.push('/revista');     
      },

    }
  }
</script>
<style scoped>
  /*@import "../assets/css/global.css";*/



  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    height: 100vh;
  }


  .card {
     background-color: #eee;    
    height: 99%;
    display: flex;
    margin: 1px;
    justify-content: space-evenly;
    flex-direction: column;
  }


  @keyframes cardAnim {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }
</style>