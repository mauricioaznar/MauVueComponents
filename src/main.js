import MauFormInputText from './components/MauFormInputText'
import MauFormInputNumber from './components/MauFormInputNumber'
import MauFormInputDate from './components/MauFormInputDate'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
    Vue.component('MauFormInputNumber', MauFormInputNumber)
    Vue.component('MauFormInputDate', MauFormInputDate)
  }
}

export default MauComponentsPlugin
