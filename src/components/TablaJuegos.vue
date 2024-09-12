<script>
//importar propiedades de vue que se usarán
import { computed, onMounted } from 'vue'
//importar store desde archivo
import { gamesStore } from '@/stores/gamesData'

export default {
  name: 'TablajuegosComponent',
  setup() {
    const store = gamesStore()
    //fetch los datos del arreglo
    const fetchJuegos = () => {
      store.getJuegos()
    }
    //aumentar stock, asignando arreglo y propiedad
    const incrementarStock = (juego) => {
      store.accionIncremento(juego.codigo)
    }
    //disminuir stock
    const disminuirStock = (juego) => {
      store.accionDisminuir(juego.codigo)
    }
    //mapear el estado
    const juegos = computed(() => store.juegos)

    //ejecutar funcion cuando se monte componente
    onMounted(() => {
      fetchJuegos()
    })
    //retornar valores para uso en template
    return { juegos, fetchJuegos, incrementarStock, disminuirStock }
  }
}
</script>
<template>
  <div>
    <h1>Tienda Juegos 32 Bits</h1>
    <h2><b>Lista de juegos</b></h2>
    <table>
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
          <td>
            <button @click="incrementarStock(juego)">+ (Aumentar stock)</button
            ><button @click="disminuirStock(juego)">- (Disminuir stock)</button>
          </td>
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
