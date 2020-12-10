<template>
  <flipbook class="flipbook" :pages="['array', 'of', 'image', 'URLs']"></flipbook>
</template>

<script>
  // @ is an alias to /src
  //import UserNavigation from '@/components/module_menus/UserNavigation.vue'

  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";

import Flipbook from 'flipbook-vue'
  export default {
    name: 'dashboard',
    components: {
      Flipbook
    },
    computed: {
      ...mapState({
        secciones: "secciones"
      })
    },
    methods: {
      actionpage(value) {
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


.flipbook {
  width: 90vw;
  height: 90vh;
}

</style>