<template>
  <div class="dashboard">
    <div class="menu-revistas">
      <div class="div-izq">
        <img src="" alt="logo-reconext">
        <p>Bienvenido a nuestra Revista Digital</p>
      </div>
      <div class="div-der" v-for="revista in revistas" :key="revista.id">
        <div class="revista">
          <div>
            <img src="" alt="logo-reconext">
          </div>
          <div>
            <h3> Edicion {{revista.edicion}}</h3>
          </div>
        </div>
      </div>
    </div>


    <div class=""></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  //import UserNavigation from '@/components/module_menus/UserNavigation.vue'



  export default {
    name: 'dashboard',
    components: {},
    computed: {
      ...mapState({
        revistas: "revistas"
      })
    },

  }
</script>
<style scoped>
  @import "../assets/css/global.css";
</style>