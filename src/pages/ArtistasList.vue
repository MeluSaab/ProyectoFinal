<template>
    <div class="page">
      <div>
        <h1 class="contador">Lista de Artistas ({{ count }}) </h1>
        <div class="list">
          <ArtistasCard v-for="artista in artistasList" :nombre="artista.nombre" :id="artista.id" :imagen="artista.imagen" class="list__card" />
        </div>
      </div>
      <!-- <Pagination @navigateTo="navigate" :currentPage="currentPage" :pages="pages" /> -->
    </div>
  </template>
  
  <script>
  import endpoints from '../endpoints';
  import ArtistasCard from '../components/ArtistasCard.vue';
  import Pagination from '../components/Pagination.vue'
  export default {
    components: {
      ArtistasCard,
      Pagination
    },
    name: "ArtistasList",
    data() {
      return {
        result: [],
        count: 0,
        artistasList: [],
        currentPage: 1,
        pages: []
      }
    },
    created() {
      this.getArtistaList()
    },

    methods: {
      getArtistaList() {
        let result = endpoints.getArtistasList().then((list) => {
          this.artistasList = list.map((artista) => {
            this.count = this.count + 1
            // return {
            //   name: artista.name,
            //   biografia: artista.biografia,
            //   pais: artista.pais,
            //   genero: artista.genero,
            //   canciones: artista.canciones,
            //   imagen: artista.imagen
            //   id: id
            // }
            return {
              ...artista
            }
          });
          return list
        })
        return result
      },
      navigate(page) {
        window.scrollTo(0, 0);
        this.currentPage = page
        this.getArtistasList()
      }
    },
  };
  </script>
  
  <style scoped>
  .list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 40px;
  }
  
  .list__card {
    min-width: 300px;
    padding: 30px;
    transition: 200ms ease;
    cursor: pointer;
    box-shadow: 0 0 40px gray;
  }
  
  .list__card:hover {
    box-shadow: 0 0 40px gray;
    transform: scale(105%);
  }

  .page {
    background-image: url(https://images.vexels.com/content/100829/preview/abstract-vector-blue-background-graphic-f6c0c4.png);
    /* background-size: cover; */
  }

  .contador {
    margin-top: 20px;
    color: whitesmoke;
    text-shadow: black 1px 0 10px;
  }

  </style>