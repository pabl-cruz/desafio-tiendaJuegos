<script>
//importar store desde archivo
import { gamesStore } from '@/stores/gamesData'
//importar propiedades de vue que se usarán
import { computed } from 'vue'

export default {
  name: 'TablajuegosComponent',
  mounted() {
    const store = gamesStore()
    //fetch los datos del arreglo
    const fetchJuegos = () => {
      store.getJuegos()
    }
    //mapear el estado
    const juegos = computed(() => store.juegos)
    //retornar valores para uso en template
    return { juegos, fetchJuegos }
  }
}
</script>
<template>
  <div>
    <h1>Tienda Juegos 32 Bits</h1>
    <h2><b>Lista de juegos</b></h2>
    <table v-on:load="fetchJuegos">
      <tbody>
        <tr>
          <th><strong>Código</strong></th>
          <th><strong>Nombre</strong></th>
          <th><strong>Precio</strong></th>
          <th><strong>Stock</strong></th>
          <th><strong>Color</strong></th>
          <th><strong>Acciones</strong></th>
        </tr>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <th>{{ juego.codigo }}</th>
          <th>{{ juego.nombre }}</th>
          <td>{{ juego.precio }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.color }}</td>
          <td><button>+ (Aumentar stock)</button><button>- (Disminuir stock)</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
tbody,
tr,
th,
td {
  border: 1px solid black;
}

th {
  padding-block: 0.5rem;
  padding-inline: 1rem;
}
</style>
