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
    _dogs: (state: DogsState): [] => state.dogs
  },
  actions: {
    fetchRandomDogBreeds: () => {}
  },
  mutations: {
    IS_LOADING: (state: DogsState, val: boolean) => {
      state.isLoading = val
    }
  }
})
