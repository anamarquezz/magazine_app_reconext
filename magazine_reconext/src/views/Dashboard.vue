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

        <div class="square" :style="rev.style" v-for="rev in revistas" :key="rev.id" @click="click_revista">

          <div class="pa-4">
            <img src="@/assets/logo.png" width="55%" alt="logo-reconext">
          </div>
          <div class="text-right pa-4">
            <h3> Edición {{rev.edicion}}</h3>
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
  //import UserNavigation

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
        revistas: "revistas",
        secciones: "secciones"
      })
    },
    methods: {
      click_revista() {
        this.$router.push('/revista');
      },

    }
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
    grid-template-columns: minmax(150px, 25%) 1fr;
  }

  .div-izq {
    grid-area: 😺;  
  }

   .div-izq .content {   
    font: bold 12px Sans-Serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    /* background: #212121; */
    /* color: #fff; */
    padding: 0px;
    margin: 18rem 19rem 0px 2rem;
    line-height: 24px;
    /* transform: rotate(-90deg); */
    /* text-align: center; */
    position: fixed;
    align-content: center;
}

  .div-der {
    grid-area: 🦄;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  .square {
    display: flex;
    flex-direction: column;
    flex: 1 1 38vh;
    margin: 1rem;
    min-width: 250px;
    max-width: 15vw;
    justify-content: space-between;
    cursor: pointer;

  }


  .square:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }

  .img-logo {
    display: grid;
    align-content: center;
  }

  @media (max-width: 767px) {

    .div-izq {
      display: block;
      position: relative;   
        
    }

    .div-izq .content {   
        font: bold 12px Sans-Serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: #212121;
    color: #fff;
    padding: 0px;
    margin: -25rem -1rem 25rem -20rem;
    line-height: 24px;
    transform: rotate(-90deg);
    text-align: center;
}
    

    .menu-revistas[data-v-22ba47ca] {
      display: grid;
      align-items: center;
    }
  }
</style>