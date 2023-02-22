<template>
    <div>
      <div class="cardCancion" @click="goToCancionDetails">
        <div class="card__image_cancion">
            <img :src="cancionImagen" class="card-img-top-cancion" :alt="nombre">
        </div>
        <h3 class="card-title-cancion">{{ cancionNombre }}</h3>
      </div>
    </div>
</template>

<script>
import capitalize from '../formatters'

export default {
nombre: "CancionesCard",
props: ['nombre', 'id', 'imagen', 'llamada'],
computed: {
    cancionNombre() {
    return capitalize(this.nombre)
    },
    cancionImagen() {
    let imagen = this.imagen
    return imagen
    }
},
methods: {
    goToCancionDetails() {
       if(this.llamada === true) {
            this.$emit('actualizar', this.id)
       } else
        {
            this.$router.push({ name: 'cancion', params: { id: this.id } })
        }

    }
}
};
</script>

<style>

    .cardCancion{
        width: 200px;
        padding: 10px;
        margin-top: 10px;
    }

    .card__image_cancion {
    width: 150px;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
    display: block;
    margin: auto;
  }
  
  .card-img-top-cancion {
    /* width: 300px; */
    height: 150px;
  }
  
  .card-title-cancion {
    margin-top: 20px;
    text-align: center;
    font-size:small;
    text-shadow: rgb(179, 179, 179) 1px 0 10px;
  } 
</style>