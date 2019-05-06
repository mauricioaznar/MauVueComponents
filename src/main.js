import MauFormInputText from './components/MauFormInputText'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
  }
}

export default MauComponentsPlugin
