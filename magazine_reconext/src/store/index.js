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
        background:'#12006F'
      },
      {
        id:2,
        nombre:'Enero',
        edicion:'2',
        background:'#31BF7B'
      },
      {
        id:3,
        nombre:'Febrero',
        edicion:'3',
        background:'#12006F'
      },
      {
        id:4,
        nombre:'Marzo',
        edicion:'4',
        background:'#31BF7B'
      }],
      secciones:[
        {
          id:1,
          seccion:'lideres',
          descripcion:'NUESTROS LIDERES',        
          background:'#12006F'
        },
        {
          id:2,
          seccion:'nosete',
          descripcion:'QUE NO SE TE OLVIDE',        
          background:'#12006F'
        },
        {
          id:3,
          seccion:'programas',
          descripcion:'PROGRAMAS, Donacion interna computadores',        
          background:'#12006F'
        },
        {
          id:4,
          seccion:'yosoy',
          descripcion:'YO SOY RECONEXT',        
          background:'#12006F'
        },
        {
          id:5,
          seccion:'sabias',
          descripcion:'¿SABIAS QUE?',        
          background:'#12006F'
        },
        {
          id:6,
          seccion:'mundo',
          descripcion:'ALREDEDOR DEL MUNDO',        
          background:'#12006F'
        },
        {
          id:7,
          seccion:'seguridad',
          descripcion:'ASEGURA TU SEGURIDAD',        
          background:'#12006F'
        },
        {
          id:8,
          seccion:'vacantes',
          descripcion:'VACANTES',        
          background:'#12006F'
        },
        {
          id:9,
          seccion:'trabajamosjuntos',
          descripcion:'TRABAJAMOS JUNTOS',        
          background:'#12006F'
        },
        {
          id:10,
          seccion:'anuncios',
          descripcion:'ANUNCIOS',        
          background:'#12006F'
        },
        {
          id:11,
          seccion:'Salud',
          descripcion:'COMO ME PREVENGO, Cancer de mama',                  
          background:'#12006F'
        },
        {
          id:12,
          seccion:'proximamente',
          descripcion:'PROXIMAMENTE !',        
          background:'#12006F'
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