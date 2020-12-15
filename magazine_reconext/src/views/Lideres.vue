<template>
  <div id="lideres" class="div-pages">

    <div class="div-izq child even">
      <div class="titulo">
        <h3>NUESTROS LIDERES</h3>
      </div>
      <div class="cards">
        <div class="card" v-for="lider in lideres" :key="lider.id" @click="seleccionadoClick(lider)">
          <div class="top-card">
            <img class="top-card-img" src="@/assets/img/boss.png">
          </div>
          <div class="top-bottom">
            <h5 class="nombre">{{lider.nombre}}</h5>
            <h5 class="puesto">{{lider.puesto}}</h5>
          </div>
        </div>
      </div>
      <div class="numero-pagina">
        <p  @click="clickHoja('secciones')">Página 1</p>
      </div>
    </div>
    <div class="div-der child " >
      <div>
        <div class="titulo">
          <h3>{{seleccionado.nombre.toUpperCase()}}</h3>
        </div>
        <div class="contenido-lider">

          <div class="card-lider">
            <div class="top-card">
              <img class="top-card-img" src="@/assets/img/boss.png">
            </div>
            <div class="top-bottom">
              <h5 class="nombre">{{seleccionado.nombre}}</h5>
              <h5 class="puesto">{{seleccionado.puesto}}</h5>
            </div>
            <div class="box-info">
              <p>{{seleccionado.descripcion}}</p>
            </div>
          </div>

        </div>

        <div class="numero-pagina">
          <p @click="clickHoja('quenoseteolvide')">Página 3</p>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    name: "lideres",
    data() {
      return {
        seleccionado: {
          nombre: "",
          imagen: "",
          puesto: "",
        }
      };
    },
    computed: {
      ...mapState({
        lideres: "lideres"
      }),

    },
    methods: {
      seleccionadoClick(lider) {
        this.seleccionado.nombre = lider.nombre;
        this.seleccionado.imagen = lider.imagen;
        this.seleccionado.puesto = lider.puesto;
        this.seleccionado.descripcion = lider.descripcion;
      },
      clickHoja(valor) {
        this.$router.push('/' + valor);
      }
    },
    mounted() {


    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/css/lideres.css";

</style>