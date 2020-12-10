<template>
  <div class="dashboard">

    <div class="menu-revistas">
      <div class="div-izq">
        <div class="content">
          <img width="50%" src="@/assets/logo.png" alt="logo-reconext">
          <p>Bienvenido a nuestra Revista Digital</p>
        </div>
      </div>
      <div class="div-der">

        <div class="contenido-revista square" v-for="rev in revistas" :key="rev.id">
          <div class="column" :style="rev.style">
            <div>
              <img src="@/assets/logo.png" width="30%" alt="logo-reconext">
            </div>
            <div>
              <h3> Edición {{rev.edicion}}</h3>
            </div>
          </div>

          <!--<div v-for="seccion in  Math.ceil(secciones.length / 3) " :key="seccion.id">
            <div :style="seccion.style" v-for="seccion in secciones.slice((seccion - 1) * 4, seccion * 4)"
              :key="seccion.id">
              <div>
                <img src="@/assets/logo.png" width="20%" alt="logo-reconext">
              </div>
              <div>
                <h3> Edicion {{seccion.descripcion}}</h3>
              </div>
            </div>
          </div>-->
        </div>
      </div>

      <!--<div class="contenido-revista">
      
      <div v-for="seccion in  Math.ceil(secciones.length / 3) " :key="seccion.id">
        <div :style="seccion.style" v-for="seccion in secciones.slice((seccion - 1) * 4, seccion * 4)"
          :key="seccion.id">
          <p class="white-text">{{seccion.descripcion}}</p>
        </div>
      </div>
    </div> -->
    </div>
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

  import {
    Hooper,
    Slide
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
    name: 'dashboard',
    components: {
      Hooper,
      Slide
    },
    computed: {
      ...mapState({
        revistas: "revistas",
        secciones: "secciones"
      })
    },

  }
</script>
<style scoped>
  /*@import "../assets/css/global.css";*/

  .menu-revistas {
    display: grid;
    grid-template-areas:
      "😺 🦄";
    width: 100vw;
    height: 100vh;
    grid-template-columns: repeat(2, minmax(0, 1fr));

  }

  .div-izq {
    grid-area: 😺;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }

  .content{
     position: fixed;
  }

  .div-der {
    grid-area: 🦄;
    position: relative;
  }

  .square {
    display: flex;
    flex-direction: column;
  }

  .column {
    flex: 1 1 38vh;
    margin: 1rem;
    width: 32vw;
  }
</style>