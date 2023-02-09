import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
import type { DogsState } from './interface'

// define injection key
export const key: InjectionKey<Store<DogsState>> = Symbol()

export const store = createStore<DogsState>({
  state: () => {
    return {
      isLoading: true,
      dogs: []
    }
  },
  getters: {
    _isLoading: (state: DogsState): boolean => state.isLoading,
    _dogs: (state: DogsState): string[] => state.dogs
  },
  actions: {
    fetchRandomDogBreeds: async ({ commit }) => {
      return await fetch(
        `https://dog.ceo/api/breeds/image/random/${100}`
      )
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
    SAVE_DOGS_DATA: (state, data: string[]) => {
      state.dogs = data
    }
  }
})
