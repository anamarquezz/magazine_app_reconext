<template>
  <div id="Programas" class="div-pages">

    <div class="div-izq child">
      <div class="titulo">
        <h3>QUE NO SE TE OLVIDE</h3>
      </div>
      <div class="contenido">

        <div class="subtitulo">
          <h2>Me cuido, Te cuido</h2>
        </div>
        <div class="box-video">
         <iframe width="60%" height="400px" src="https://www.youtube.com/embed/SVQpEiOWIhE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="box-decripcion">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div class="numero-pagina">
        <p>Página 4</p>
      </div>
    </div>
    <!--div class="div-der child" @click="clickHoja('programas')">
      <div>
        <div class="titulo">
          <h3>QUE NO SE TE OLVIDE</h3>
        </div>
        <div class="contenido-lider">

          <div class="card-lider">

          </div>

        </div>

        <div class="numero-pagina">
          <p>Página 4</p>
        </div>
      </div>

    </div-->

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
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  @import "../assets/css/quenoseteolvide.css";
  @import "../assets/css/global.css";
</style>