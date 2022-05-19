import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    isMock: false,
  }),
  getters: {},
})
