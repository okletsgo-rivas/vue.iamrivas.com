import { defineStore } from 'pinia'

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: 0,
    filter: 'all'
  }),
  getters: {
  },
})
