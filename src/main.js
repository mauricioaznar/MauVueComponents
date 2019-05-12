import MauFormInputText from './components/MauFormInputText.vue'
import MauFormInputNumber from './components/MauFormInputNumber.vue'
import MauFormInputDate from './components/MauFormInputDate.vue'
import MauFormInputSelectStatic from './components/MauFormInputSelectStatic.vue'
import MauFormGroupDateTime from './components/MauFormGroupDateTime.vue'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
    Vue.component('MauFormInputNumber', MauFormInputNumber)
    Vue.component('MauFormInputDate', MauFormInputDate)
    Vue.component('MauFormInputSelectStatic', MauFormInputSelectStatic)
    Vue.component('MauFormGroupDateTime', MauFormGroupDateTime)
  }
}

export default MauComponentsPlugin
