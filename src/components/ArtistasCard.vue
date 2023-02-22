<template>
    <div class="card" @click="goToArtistaDetails">
      <div class="card__image">
        <img :src="artistaImagen" class="card-img-top" :alt="nombre">
      </div>
      <h3 class="card-title">{{ artistaNombre }}</h3>
    </div>
  </template>
  
  <script>
  import capitalize from '../formatters'
  
  export default {
    nombre: "ArtistaCard",
    props: ['nombre', 'id', 'imagen'],
    computed: {
      artistaNombre() {
        return capitalize(this.nombre)
      },
      artistaImagen() {
        let imagen = this.imagen
        return imagen
      }
    },
    methods: {
      goToArtistaDetails() {
        this.$router.push({ name: 'artista', params: { id: this.id } })
      }
    }
  };
  </script>
  
  <style>
  .card{
    width: 300px;
  }

  .card__image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    display: block;
    margin: auto;
  }
  
  .card-img-top {
    /* width: 300px; */
    height: 300px;
  }
  
  .card-title {
    margin-top: 40px;
    text-align: center;
    color: whitesmoke;
    text-shadow: rgb(54, 54, 54) 1px 0 10px;
  }
  </style>