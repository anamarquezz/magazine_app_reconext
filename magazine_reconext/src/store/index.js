import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {   
    revistas:[
      {
        id:1,
        nombre:'Diciembre',
        edicion:'1',
        style:{
          background:'#12006F',
          color:'white'
        }
      },
      {
        id:2,
        nombre:'Enero',
        edicion:'2',       
        style:{
          background:'#31BF7B',
          color:'white'
        }
      },
      {
        id:3,
        nombre:'Febrero',
        edicion:'3',        
        style:{
          background:'#12006F',
          color:'white'
        }
      },
      {
        id:4,
        nombre:'Marzo',
        edicion:'4',      
        style:{
          background:'#12006F',
          color:'white'
        }
      }],
      secciones:[
        {
          id:1,
          seccion:'lideres',
          descripcion:'NUESTROS LIDERES',        
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:2,
          seccion:'nosete',
          descripcion:'QUE NO SE TE OLVIDE',                 
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:3,
          seccion:'programas',
          descripcion:'PROGRAMAS, DONACION INTERNA COMPUTADORAS',        
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:4,
          seccion:'yosoy',
          descripcion:'YO SOY RECONEXT',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:5,
          seccion:'sabias',
          descripcion:'¿SABIAS QUE?',        
          style:{
            background:'#373737',
            color:"white"           
          }
        },
        {
          id:6,
          seccion:'mundo',
          descripcion:'ALREDEDOR DEL MUNDO',        
          style:{
            background:'#45AD51',
            color:"white"
          }
        },
        {
          id:7,
          seccion:'seguridad',
          descripcion:'ASEGURA TU SEGURIDAD',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:8,
          seccion:'vacantes',
          descripcion:'VACANTES',        
          style:{
            background:'#45AD51',
            color:"white"
          }
        },
        {
          id:9,
          seccion:'trabajamosjuntos',
          descripcion:'TRABAJAMOS JUNTOS',        
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:10,
          seccion:'anuncios',
          descripcion:'ANUNCIOS',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:11,
          seccion:'Salud',
          descripcion:'COMO ME PREVENGO, CANCER DE MAMA',                  
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:12,
          seccion:'proximamente',
          descripcion:'PROXIMAMENTE!',        
          style:{
            background:'#373737',
            color:"white"
          }
        }
      ]
  },
  mutations: {    
  set_value: (state,prop) => {
    state[prop.name] = prop.value;
  },
  },
  actions: {   
  },
  modules: {}
})