<template>
  <div class="magazine-viewport" v-resize="onResize">
    <div class="container">
      <div id="magazine">
        
        <div class="page">
          <Secciones></Secciones>
        </div>
        <div class="page">
          <lideres></lideres>
        </div>
        <div class="page">
          <Quenoseteolvide></Quenoseteolvide>
        </div>
        <div class="page">
          <lideres></lideres>
        </div>
        <div class="page">
          <Quenoseteolvide></Quenoseteolvide>
        </div>
      </div>
      <!--div>
        <v-row align="center" justify="space-around">
          <div class="anterior" @click="anterior()">

          </div>
          <div class="siguiente" @click="siguiente()">

          </div>
        </v-row>
      </div-->
    </div>
  </div>
</template>
<script>
  import Dashboard from "@/views/Dashboard";
  import Secciones from "@/views/Secciones";
  import lideres from "@/views/Lideres";
  import Quenoseteolvide from "@/views/Quenoseteolvide";
  import '@/assets/js/turn.min.js'
  export default {
    name: "revista",
    components: {
      Dashboard,
      Secciones,
      lideres,
      Quenoseteolvide
    },
    data() {
      return {
        isMobile: false
      };
    },
    methods: {
      anterior() {
        $("#magazine").turn("previous");
      },
      siguiente() {
        $("#magazine").turn("next");
      },
      onResize() {
        if (window.innerWidth < 910) this.isMobile = true;
        else this.isMobile = false;
      }
    },
    mounted() {
      var me = this;
      $(window).ready(function () {

        $('#magazine').turn({
          display: me.isMobile ? 'single' : 'double',
          acceleration: true,
          gradients: !$.isTouch,
          elevation: 10,
          duration: 1500,
          when: {
            turned: function (e, page) {
              /*console.log('Current view: ', $(this).turn('view'));*/
            }
          }
        });
      });

      $(window).bind('keydown', function (e) {

        if (e.keyCode == 37)
          $('#magazine').turn('previous');
        else if (e.keyCode == 39)
          $('#magazine').turn('next');

      });
    }
  };
</script>
<style lang="scss" scoped>
  .magazine-viewport {
    overflow: hidden;
    width: 100%;
    height: 16.5vh;
  }

  .magazine-viewport .container {
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
  }

  .magazine-viewport .magazine {
    width: 922px;
    height: 16.5vh;
  }

  .magazine-viewport .page {
    width: 61px;
    height: 16.5vh;
    background-color: rgb(238, 238, 238);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .magazine .page {
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .magazine-viewport .page img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
  }

  .magazine-viewport .shadow {
    -webkit-transition: -webkit-box-shadow 0.5s;
    -moz-transition: -moz-box-shadow 0.5s;
    -o-transition: -webkit-box-shadow 0.5s;
    -ms-transition: -ms-box-shadow 0.5s;
    -webkit-box-shadow: 0 0 20px #ccc;
    -moz-box-shadow: 0 0 20px #ccc;
    -o-box-shadow: 0 0 20px #ccc;
    -ms-box-shadow: 0 0 20px #ccc;
    box-shadow: 0 0 20px #ccc;
  }

  .anterior {
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
    z-index: auto;
    width: 36rem;
    height: 947px;
    z-index: 100;
  }

  .siguiente {
    position: absolute;
    overflow: hidden;
    width: 576px;
    height: 752px;
    inset: 4px 46rem auto auto;
    z-index: 101;
  }
</style>