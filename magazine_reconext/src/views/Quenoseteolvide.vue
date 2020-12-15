<template>
  <div id="Programas" class="div-pages">

    <div class="div-izq child" @click="clickHoja('lideres')">
      <div class="titulo">
        <h3>QUE NO SE TE OLVIDE</h3>
      </div>
      <div class="cards">
        SDFSDFDFDSFSDFDS
      </div>
      <div class="numero-pagina">
        <p>Página 3</p>
      </div>
    </div>
    <div class="div-der child" @click="clickHoja('programas')">
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
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  @import "../assets/css/quenoseteolvide.css";
</style>