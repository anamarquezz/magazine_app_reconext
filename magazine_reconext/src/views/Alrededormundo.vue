<template>
  <div id="Alrededormundo" class="div-pages">

    <div class="div-izq child">
      <div class="titulo">
        <h3>RECONEXT Al rededor del mundo</h3>
      </div>
      <div class="contenido">

        <div class="subtitulo">
          <p>Los datos de nuestros clientes son el activo más valioso que tenemos bajo nuestra custodia. Para protegerlo, continuamos mejorando nuestros procesos de seguridad de datos.</p>
        </div>
        <div class="box-video">          
            <p></p>
        </div>
        <div class="box-decripcion">
          <div class="child">
            <img src="@/assets/img/alrededor.png" alt="" width="400">
            </div>
          <div class="child">
            <p><b>Nombre:</b>"Lorem ipsum dolor sit amet</p>
          <p><b>Puesto:</b>"Lorem ipsum dolor sit amet</p>
          <p><b>Departamento:</b>"Lorem ipsum dolor sit amet</p>
          <p><b>Antiguedad:</b>"Lorem ipsum dolor sit amet</p>
          </div>
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
    name: "Alrededormundo",
    data() {
      return {
        seleccionado: {         
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
  @import "../assets/css/alrededormundo.css";
  @import "../assets/css/global.css";
</style>