import axios from 'axios'
import { defineStore } from 'pinia'

//definir store
export const gamesStore = defineStore('gamesData', {
  state: () => ({ juegos: [] }),
  actions: {
    async getJuegos() {
      //context.commit('changeDolarPrice', response.data.dolar.valor)
      try {
        const obj = './data/juegos.json'
        const { data } = await axios.get(obj)
        //actualizar el estado directamente
        this.juegos = data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
