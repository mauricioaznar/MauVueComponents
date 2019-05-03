import MauBanner from './components/Banner.vue'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauBanner', MauBanner)
  }
}

export default MauComponentsPlugin
