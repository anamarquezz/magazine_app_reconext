<template>
  <div class="cards-wrapper">

    <div class="" v-for="seccion in secciones" :key="seccion.id">
      <div class="card" :style="seccion.style" @click="click_seccion">
        <div class="pa-4 text-center">
          <h1> {{seccion.descripcion}}</h1>
        </div>
        <div class="text-right pa-4">
          <div>
            <h3> {{seccion.seccion}}</h3>
          </div>
          <div>
            <h6> Página {{seccion.id}}</h6>
          </div>

        </div>



      </div>
    </div>


    <!--
    <v-card class="secciones  mx-auto" color="#26c6da" dark max-width="400" :style="seccion.style"
      >
      <v-card-title>
        <v-icon large left>
          mdi-twitter
        </v-icon>
        <span class="title font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
        well."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">
              mdi-heart
            </v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-share-variant
            </v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card> -->
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
        this.$router.push('/lideres');
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

  .card:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
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