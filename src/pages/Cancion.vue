<template>
    <div>
        <div class="page-cancion" :style="{ backgroundImage: 'url(' + cancion.fondo + ')' }">
           <div class="card_cancion">
                <div>
                    <img :src="cancion.imagen" class="imagenCancion" :alt="cancion.nombre">
                    <img src="../assets/reproductor.jpeg" class="reproductor" alt="reproductor">
                    <div class="tiempo">
                        <div class="inicio">00:00</div>
                        <div class="fin">{{ cancion.duracion }}</div>
                    </div>
                </div>
                <div class="texto-info">
                    <div class="nombre">
                        <h1> {{ cancionNombre }}</h1>
                    </div>
                    <div class="album">
                        <h1> Album: "{{ cancionAlbum }}"</h1>
                    </div>
                </div>
            
            </div> 
        </div>
        
        <div class="listaCanciones">
            <h1>Canciones del Album : </h1>
            <div class="lista">
               <CancionesCard @actualizar="actualizar" v-for="cancion in cancionesList" :nombre="cancion.nombre" :id="cancion.id" :imagen="cancion.imagen" :llamada=true class="list__card_cancion" /> 
            </div>
        </div>
    </div>
</template>

<script>
import endpoints from '../endpoints';
import capitalize from '../formatters';
import CancionesCard from '../components/CancionesCard.vue'
export default {
    components: {
      CancionesCard
    },
    nombre:"Cancion",
    data() {
        return{
            id: '',
            cancion: {
                nombre:'',
                duracion: '',
                album: '',
                imagen: '',
                fondo: '',
            },
            cancionesList: []  
        }
    },

    computed: {
        cancionNombre(){
            return capitalize(this.cancion.nombre)
        },
        cancionAlbum(){
            return capitalize(this.cancion.album)
        }
    },

    created(){
        window.scroll(0,0)
        this.id = this.ids();
        this.crear();
    },

    methods: {
        actualizar(id){
            this.id = id;
            this.crear()
            window.scroll(0,0)
        },

        ids(){
            return this.$route.params.id.toString()
        },
        getCancion(){
            endpoints.getCancion(this.id).then((cancion) => {
                this.cancion = cancion
            })
        },
        getCancionesAlbum(){
            endpoints.getAlbum(this.id).then((canciones) => {
                this.cancionesList = canciones.map((cancion) => {
                    return{
                        ...cancion
                    }
                })
            })
        },
        crear(){
            this.getCancion();
            this.getCancionesAlbum();
        }
    },

}
</script>

<style>
  
  .page-cancion{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    position: relative;
    top: -20px;
    left: -20px;
    width: 1355px;
  }

  .card_cancion{
    position: relative;
    top: 5%;
    width: 400px;
    height: 530px;
    background-color: white;
    box-shadow: 0 0 40px rgb(43, 43, 43);
    display: block;
    margin: auto;

  }

  .imagenCancion{
    padding: 40px;
    width: 300px;
    height: 300px;
    display: block;
    margin: auto;
  }

  .reproductor{
    position: relative;
    top: -30px;
    left: 40px;
    width: 300px;
    height: 150px;  
  }

  .tiempo{
    position: relative;
    top: -115px;
    left: 60px;
    background-color: white;
    width: 30px;
    font-weight: bold;
    color: black;
  }
  .fin{
    position: relative;
    top: -18px;
    left: 230px;
    background-color: white;
    width: 30px;
    font-weight: bold;
    color: black;
  } 

  .nombre{
    position: relative;
    top: -247px;
    left: 45px;
    width: 225px;
    color: black;
    font-size: 8px;
    background-color: white;
  }

  .album{
    position: relative;
    top: -248px;
    left: 40px;
    width: 200px;
    height: 20px;
    color: black;
    font-size: 8px;
    background-color: white;
  }

  .album h1{
    padding: 5px;
  }

  .texto-info{
    position: relative;
    top: 30px;
    left: 10px;
  }

  .listaCanciones{
    box-shadow: 0 0 40px rgb(43, 43, 43);
  }

  .listaCanciones h1{
    padding: 30px;
  }

  .lista {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 40px;
    padding: 20px;
  }
  
  .list__card_cancion {
    min-width: 200px;
    padding: 10px;
    transition: 200ms ease;
    cursor: pointer;
    box-shadow: 0 0 40px gray;
  }

  .list__card_cancion:hover {
    box-shadow: 0 0 40px gray;
    transform: scale(105%);
  }

</style>