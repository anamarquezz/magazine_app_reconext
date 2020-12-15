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
          id:3,
          seccion:'nosete',
          descripcion:'QUE NO SE TE OLVIDE',                 
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:5,
          seccion:'programas',
          descripcion:'PROGRAMAS, DONACION INTERNA COMPUTADORAS',        
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:7,
          seccion:'yosoy',
          descripcion:'YO SOY RECONEXT',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:9,
          seccion:'sabias',
          descripcion:'¿SABIAS QUE?',        
          style:{
            background:'#373737',
            color:"white"           
          }
        },
        {
          id:11,
          seccion:'mundo',
          descripcion:'ALREDEDOR DEL MUNDO',        
          style:{
            background:'#45AD51',
            color:"white"
          }
        },
        {
          id:13,
          seccion:'seguridad',
          descripcion:'ASEGURA TU SEGURIDAD',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:15,
          seccion:'vacantes',
          descripcion:'VACANTES',        
          style:{
            background:'#45AD51',
            color:"white"
          }
        },
        {
          id:17,
          seccion:'trabajamosjuntos',
          descripcion:'TRABAJAMOS JUNTOS',        
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:19,
          seccion:'anuncios',
          descripcion:'ANUNCIOS',        
          style:{
            background:'#373737',
            color:"white"
          }
        },
        {
          id:21,
          seccion:'Salud',
          descripcion:'COMO ME PREVENGO, CANCER DE MAMA',                  
          style:{
            background:'#355EA8',
            color:"white"
          }
        },
        {
          id:23,
          seccion:'proximamente',
          descripcion:'PROXIMAMENTE!',        
          style:{
            background:'#373737',
            color:"white"
          }
        }
      ],
      lideres:[{
        id:1,
        nombre:'Ing. Jorge De la Torre',
        imagen:'imagen1.jpg',
        puesto:'Vicepresidente de Operaciones',
        descripcion:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      },
      {
        id:2,
        nombre:'Lic. Fernando Mendieta Valle',
        imagen:'boss.png',
        puesto:'Director de Recursos Humanos',
        descripcion:'"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '
      },
      {
        id:3,
        nombre:'Ing. Sergio Montoya Alcaraz',
        imagen:'boss.png',
        puesto:'Director de Calidad',
        descripcion:'" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" '
      },
      {
        id:4,
        nombre:'Ing. Arturo Medel Lizarraga',
        imagen:'boss.png',
        puesto:'Director de Cadena de Suministros',
        descripcion:'mnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut r'
      },  
      {
        id:5,
        nombre:'Ing. Arturo Lopez Castillo',
        imagen:'boss.png',
        puesto:'Gerente de Mantenimiento',
        descripcion:'" necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic '
      },
      {
        id:6,
        nombre:'Ing. Gerardo Zambrano Sandoval',
        imagen:'boss.png',
        puesto:'Gerente de Sistemas',
        descripcion:'"tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." '
      },
      {
        id:7,
        nombre:'Lic. Humberto Limon Peña',
        imagen:'boss.png',
        puesto:'Gerente de Seguridad Patrimonial',
        descripcion:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
      }]
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