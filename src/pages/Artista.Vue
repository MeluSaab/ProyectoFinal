<template>
    <div class="pagina">
      <div class="fondo" :style="{ backgroundImage: 'url(' + artista.imagen + ')' }"> m</div>
      <div class="info" > 
        <div class="info__name">
          <div class="texto">
            <h1>{{ artistaNombre }}</h1>
            <h2>Musica {{ artistaGenero }}</h2>
          </div>
            <img :src="artista.imagen" class="img" :alt="artista.nombre">
        </div>
      </div>
      <div class="info_biografia">
          <h1>Conociendo un poco del artista...</h1>
          <div class="biografia">
            <h4>{{ artistaBiografia }}</h4>
          </div>
      </div>
      <div class="canciones">
        <h1>Canciones del artista:</h1>
        <div class="list_canciones">
          <CancionesCard v-for="cancion in cancionesList" :nombre="cancion.nombre" :id="cancion.id" :imagen="cancion.imagen" class="list__card_canciones" />
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
    nombre: "Artista",
    data() {
        return {
            id: '',
            artista: {
                nombre: '',
                biografia: '',
                pais: '',
                genero: '',
                canciones: [],
                imagen: ''
            },
            cancionesList: []
        }
    },

    computed: {
        artistaNombre(){
            return capitalize(this.artista.nombre)
        },
        artistaGenero(){
          return capitalize(this.artista.genero)
        },
        artistaBiografia(){
          return capitalize(this.artista.biografia)
        }
    },

    created() {
      window.scroll(0,0);
      this.id = this.$route.params.id.toString();
      endpoints.getArtista(this.id).then((artista) => {
          this.artista = artista
          })
      this.getCancionesList();
      },

    methods: {
      getCancionesList(){
        endpoints.getCancionesList(this.id).then((list) => {
          this.cancionesList = list.map((cancion) => {
            return{
              // nombre: cancion.nombre,
              // duracion: cancion.duracion,
              // album: cancion.album,
              // imagen: cancion.imagen
              ...cancion
            }
          })
        })
      }
    }
}
</script>

<style>
  span {
  font-weight: bold;
}

.pagina{
  background-image: url(https://i.pinimg.com/originals/ca/9b/7e/ca9b7e02dca1b7a81f4e846bbfc2c67d.jpg);
  background-size: cover;
  height: 1350px;
}

.fondo{
  filter: blur(8px);
  -webkit-filter: blur(8px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
}

.info {
  position: relative;
  top: -600px;
  z-index: 2;
  padding: 0 2em;
  margin-top: 2em;
  display: grid;
  grid-template-rows: 3em 1fr;
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
  align-items: stretch;
  gap: 2em;
}

.info__name {
  grid-row: 1 / span 2;
  margin-left: 90%;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  width: 50%;
} 

.texto{
  width: 250%;
  color: whitesmoke;
  text-shadow: black 1px 0 10px;
}

.info__name img{
  margin-left: 15%;
  width: 225%;
  box-shadow: 10px 10px 20px black;
  transition: 350ms ease;
}

.img:hover{
  transform: scale(101%);
}

.info_biografia{
  position: absolute;
  top: 50%;
  transform: translate(0%, 500px);
  width: 50%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 1 / span 2;
  background-color: whitesmoke;
  padding: 30px;
  box-shadow: 0 0 10px rgb(127, 93, 165)
}

.info_biografia h1{
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  /* box-shadow: 0 0 10px rgb(172, 172, 172); */
  transition: 200ms ease;
  text-align: left;
  font-weight: bold;
}

.biografia{
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  line-height: 30px;
}

.canciones{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 2 / span 2;

  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(0%, 510px);

  width: 300px;
  min-width: 450px;
  padding: 30px;
  cursor: pointer;
  background-color: whitesmoke;
  padding: 30px;
  box-shadow: 0 0 10px rgb(127, 93, 165)

}

.canciones h1{
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  /* box-shadow: 0 0 10px rgb(172, 172, 172); */
  transition: 200ms ease;
  text-align: left;
  font-weight: bold;
}

.list_canciones {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 10px;
}

.list__card_canciones {
  display: flex;
  min-width: 200px;
  padding: 10px;
  transition: 200ms ease;
  cursor: pointer;
  box-shadow: 0 0 40px gray;
}

.list__card_canciones:hover {
  box-shadow: 0 0 40px gray;
  transform: scale(105%);
}

</style>