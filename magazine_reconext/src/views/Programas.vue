<template>
  <div id="Programas" class="div-pages">

    <div class="div-izq child">
      <div class="titulo">
        <h3>PROGRAMAS, DONACION INTERNA COMPUTADORAS</h3>
      </div>
      <div class="contenido">

        <div class="subtitulo">
          <h2>Me cuido, Te cuido</h2>
        </div>
        <div class="box-video">
          <img src="@/assets/img/programa.png" alt="" width="370">
        </div>
        <div class="box-decripcion">
          <p>"Lorem ipsum dolor sit amet</p>
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
    name: "programas",
    data() {
      return {
        seleccionado: {}
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
  @import "../assets/css/programas.css";
  @import "../assets/css/global.css";
</style>