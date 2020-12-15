<template>
  <div>
    <div id="magazine">
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg" alt="" />
      </div>
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg" alt="" />
      </div>
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg" alt="" />
      </div>
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg" alt="" />
      </div>
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg" alt="" />
      </div>
      <div class="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg" alt="" />
      </div>
    </div>
    <div>
      <v-row align="center" justify="space-around">
       <div class="anterior" @click="anterior()">
         
        </div>
        <div class="siguiente"  @click="siguiente()">
          
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
  import '@/assets/js/turn.min.js'

  export default {
    name: "revista", 
    methods: {
      anterior() {
       $("#magazine").turn("previous");
      },
       siguiente() {
        $("#magazine").turn("next");
      }
    },
    mounted() {

      $(window).ready(function () {
       
        $('#magazine').turn({
          display: 'double',
          acceleration: true,
          gradients: !$.isTouch,
          elevation: 50,
          when: {
            turned: function (e, page) {
              /*console.log('Current view: ', $(this).turn('view'));*/
            }
          }
        });
      });
      
       $("#magazine").turn("resize");
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
  #magazine {
    width: 1152px;
    height: 752px;
  }

  #magazine .turn-page {
    background-color: #ccc;
    background-size: 100% 100%;
  }

  .anterior{ 
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
    z-index: auto;
    width: 36rem;
    height: 947px;
    z-index: 100;
}
  
  .siguiente{
  position: absolute;
    overflow: hidden;
    width: 576px;
    height: 752px;
    inset: 4px 46rem auto auto;
    z-index: 101;
  }
</style>