<template>
  <div id="Yosoy" class="div-pages">

    <div class="div-izq child">
      <div class="titulo">
        <h3>YO SOY RECONEXT</h3>
      </div>
      <div class="contenido">

        <div class="subtitulo">
          <h2>Testimonio empleado</h2>
        </div>
        <div class="box-video">          
              <iframe width="550" height="350" src="https://www.youtube.com/embed/SVQpEiOWIhE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        <div class="box-decripcion">
          <div class="child">
            <img src="@/assets/img/boss.png" alt="" width="200">
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
    name: "programas",
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
  @import "../assets/css/yosoy.css";
  @import "../assets/css/global.css";
</style>