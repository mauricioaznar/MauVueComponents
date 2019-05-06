import MauFormInputText from './components/MauFormInputText'
import MauFormInputNumber from './components/MauFormInputNumber'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
    Vue.component('MauFormInputNumber', MauFormInputNumber)
  }
}

export default MauComponentsPlugin
