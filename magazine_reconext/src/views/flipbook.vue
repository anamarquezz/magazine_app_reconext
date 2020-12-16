<template>
<div class="conta">
  <flipbook class="flipbook" :pages="pages" zooms="1" >    
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
    name: 'dashboard',
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
            'https://downmagaz.net/uploads/posts/2016-04/1460168599_gadget_i7_2016_downmagaz.jpg',            
            'https://pocketmagscovers.imgix.net/stuff-magazine-march-2017-cover.jpg?w=362&auto=format',
            'https://pocketmagscovers.imgix.net/technology-and-innovation-magazine-issue-3-cover.jpg?w=362&auto=format',
            'https://pocketmagscovers.imgix.net/technology-and-innovation-magazine-technology-and-innovation-cover.jpg?w=362&auto=format',
            'https://www.aceville.com/esubscriber-covers/TI_cover.png',
            'https://d1ri6y1vinkzt0.cloudfront.net/media/images/Original/bc73e4ca-7bcd-40ae-a836-e54b0a02c41d.jpg?v=583884661',
            'https://pocketmagscovers.imgix.net/technology-and-innovation-magazine-tech-and-innov-2018-cover.jpg?w=362&auto=format',
            'https://cdn10.bigcommerce.com/s-e2q5po/products/4334/images/8230/9781569024393-Science_Technology__01163.1462383252.1280.1280.jpg?c=2',
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