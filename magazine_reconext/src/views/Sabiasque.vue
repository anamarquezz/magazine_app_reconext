<template>
  <div id="sabiasque" class="div-pages">

    <div class="div-izq child">
      <div class="titulo">
        <h3>SABIAS QUE...?</h3>
      </div>
      <div class="contenido">

        <div class="subtitulo">
          <p>Reconext es un miembro activo de la red de la Fundación Ellen MacArthur, que trabaja para inspirar a una
            generación a repensar, rediseñar y construir una economía circular positiva para el futuro. Trabajamos con
            otros miembros en una serie de proyectos conjuntos relevantes para la industria de la electrónica y los
            servicios posventa.</p>
        </div>

        <div class="box-decripcion">
          <div class="child">
            <img src="@/assets/img/sabiasque.png" alt="" width="200">
          </div>
          <div class="child">
            <p>En enero de 2020, la Fundación Ellen MacArthur lanzó Circulytics,
              una herramienta que permite a las organizaciones evaluar qué tan circulares son
              actualmente a través de un amplio conjunto de métricas, agregadas como una puntuación
              a nivel de empresa. Este puntaje, junto con los conocimientos y el análisis de la
              Fundación Ellen MacArthur, ayuda a las empresas a comprender el alcance
              de su éxito en la adopción de oportunidades comerciales de
              economía circular. La puntuación proporciona una instantánea
              de la circularidad de sus flujos de materiales y modelos de servicio
              y destaca las áreas de desarrollo más importantes en las que concentrarse.
              Fuimos una de las 30 empresas que participaron en la fase de prueba Beta en 2019,
              y estamos encantados de haber obtenido la máxima calificación. Nuestra puntuación
              Circulytics A es un testimonio de nuestro papel habilitador. Al contribuir
              sustancialmente a la transición a una economía circular, estamos en condiciones
              de ayudar a nuestra base de clientes a acelerar su transición y rendimiento circular.
              Un analista de la Fundación Ellen MacArthur declaró: "La muy buena puntuación 'A'
              general de Reconext refleja el hecho de que su modelo de negocio
              es intrínsecamente circular".
            </p>
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
  @import "../assets/css/yosoy.css";
  @import "../assets/css/global.css";
</style>