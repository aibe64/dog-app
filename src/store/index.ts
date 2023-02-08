import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
import type { DogsState } from './interface'

// define injection key
export const key: InjectionKey<Store<DogsState>> = Symbol()

export const store = createStore<DogsState>({
  state: {
    dogs: []
  }
})
