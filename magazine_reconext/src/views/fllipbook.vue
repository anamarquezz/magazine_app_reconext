<template>
<div class="conta">
  <flipbook class="flipbook" :pages="pages">    
  </flipbook>
</div>
</template>

<script>
  // @ is an alias to /src
  //import UserNavigation
import flipbook from 'flipbook-vue'
  import {
    mapState,
    mapActions,
    mapGetters
  } from "vuex";

  export default {
    name: 'fllipbook',
    components: {
      flipbook   
    },
    computed: {
      ...mapState({            
      })
    },
    data() {
      return {     
             pages:[          
            'https://drive.google.com/uc?id=1JfysyWALoZjrg44sJT9sGI2DbMs37Gmj',            
            'https://drive.google.com/uc?id=1odBlbZy6l1cHauxiRhDrDesXUr5WXBOd', 
            'https://drive.google.com/uc?id=1CNlTq0WXT9DqlpHiavr2vVgomFpCKC2L', 
            'https://drive.google.com/uc?id=1hGeD_xDQPURyJm2UgEEQY_zrRsZu6w2Q', 
            'https://drive.google.com/uc?id=1XMNpVh9f6rtYBF2JzMqh8Hk1wox4pkcE', 
            'https://drive.google.com/uc?id=1IehFSpDR6fAA0MePYCyDKk0GIQA5PFCl', 
            'https://drive.google.com/uc?id=1pWSOQI9cr6Wk0asvTd4eLWOdHuL-nVNs', 
            'https://drive.google.com/uc?id=1PXLsTVZ3zZPQ88LcqvqUbdirgV6YzjQ3', 
            'https://drive.google.com/uc?id=1fKXsX6E9zQJ2mlnzIOTWbUZalhWSHUcI',            
            'https://drive.google.com/uc?id=1jx-j16YQ9v4dy28A4Qs_eqGk6HnzvEaQ', 
            'https://drive.google.com/uc?id=1Y0DEA68yfP5aju3o5geBLQjICNDufZHD', 
            'https://drive.google.com/uc?id=1YuQSmjvxkPAOu5xDdzJETZ7FfwiaEg_d', 
            'https://drive.google.com/uc?id=1f7p2x9ou6grjbiryZBNGQpVxdcXDWq44', 
            'https://drive.google.com/uc?id=12fkjODZQkAqlNM4zKM_ZogMKwMiLj_02',
            'https://drive.google.com/uc?id=1wl0uJdBU2KogtPyKY-fsO2JcFR3KsCMw',
            'https://drive.google.com/uc?id=1575idQxbQaav2Ya6lcfFOxdQRb8a5bZS'
            ]         
          };       
    },
    methods: {  
    }
  }
</script>
<style scoped>
  /*@import "../assets/css/global.css";*/
.flipbook {
  width: 95vw;
  height: 95vh;
}


</style>