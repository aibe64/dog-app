// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
import { Store } from 'shims.vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}