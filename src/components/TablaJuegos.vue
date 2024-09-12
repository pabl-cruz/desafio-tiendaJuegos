<script>
//importar store desde archivo
import { gamesStore } from '@/stores/gamesData'
//importar propiedades de vue que se usarán
import { computed } from 'vue'

export default {
  name: 'TablajuegosComponent',
  setup() {
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
    <button @click="fetchJuegos()">Ver datos</button>
    <table>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <th>{{ juego.nombre }}</th>
          <td>{{ juego.precio }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
