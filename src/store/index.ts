import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import { request } from '@/api/apiBaseUrl'

// define your typings for the store state
import type { DogsState } from './interface'

// define injection key
export const key: InjectionKey<Store<DogsState>> = Symbol()

export const store = createStore<DogsState>({
  state: () => {
    return {
      isLoading: false,
      dogsBreedList: [],
      dogs: []
    }
  },
  getters: {
    _isLoading: (state: DogsState): boolean => state.isLoading,
    _dogsBreedList: (state: DogsState): any[] => state.dogsBreedList,
    _dogs: (state: DogsState): any[] => state.dogs
  },
  actions: {
    fetchDogsBreedList: async ({ commit }, breed: string) => {
      return await request('/breeds/list/all', {})
        .then(resp => resp.json())
        .then(data => {
          const { status, message } = data

          if (status === 'success') {            
            // save data in store
            commit('SAVE_DOG_BREED_LIST', Object.keys(message))
          }
          return data
        })
        .catch(error => error)
    },
    fetchRandomDogBreeds: async ({ commit }) => {
      return await request(`/breeds/image/random/${100}`, {})
      .then(resp => resp.json())
        .then(data => {
          const { status, message } = data

          if (status === 'success') {
            // save data in store
            commit('SAVE_DOGS_DATA', message)
          }
          return data
        })
        .catch(error => error)
    },
    fetchDogsByBreed: async ({ commit }, breed) => {
      return await request(`/breed/${breed}/images`, {})
      .then(resp => resp.json())
        .then(data => {
          const { status, message } = data
          
          if (status === 'success') {
            // save data in store
            commit('SAVE_DOGS_DATA', message)
          }
          return data
        })
        .catch(error => error)
    }
  },
  mutations: {
    IS_LOADING: (state, val: boolean) => {
      state.isLoading = val
    },
    SAVE_DOG_BREED_LIST: (state, data: string[]) => {
      state.dogsBreedList = data
    },
    SAVE_DOGS_DATA: (state, data: string[]) => {
      state.dogs = data
    }
  }
})
