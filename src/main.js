import MauFormInputText from './components/MauFormInputText'
import MauFormInputNumber from './components/MauFormInputNumber'
import MauFormInputDate from './components/MauFormInputDate'
import MauFormInputSelectStatic from './components/MauFormInputSelectStatic'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
    Vue.component('MauFormInputNumber', MauFormInputNumber)
    Vue.component('MauFormInputDate', MauFormInputDate)
    Vue.component('MauFormInputSelectStatic', MauFormInputSelectStatic)
  }
}

export default MauComponentsPlugin
