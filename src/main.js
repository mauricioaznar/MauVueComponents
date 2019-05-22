import MauFormInputText from './components/MauFormInputText.vue'
import MauFormInputNumber from './components/MauFormInputNumber.vue'
import MauFormInputDate from './components/MauFormInputDate.vue'
import MauFormInputSelectStatic from './components/MauFormInputSelectStatic.vue'
import MauFormGroupDateTime from './components/MauFormGroupDateTime.vue'
import MauFormInputCheckBox from './components/MauFormInputCheckBox.vue'
import MauFormGroupCheckBoxes from './components/MauFormGroupCheckBoxes.vue'
import MauFormGroupTime from './components/MauFormGroupTime.vue'
import MauFormGroupRadio from './components/MauFormGroupRadio.vue'
import MauModal from './components/MauModal.vue'

const MauComponentsPlugin = {
  install (Vue) {
    Vue.component('MauFormInputText', MauFormInputText)
    Vue.component('MauFormInputNumber', MauFormInputNumber)
    Vue.component('MauFormInputDate', MauFormInputDate)
    Vue.component('MauFormInputSelectStatic', MauFormInputSelectStatic)
    Vue.component('MauFormGroupDateTime', MauFormGroupDateTime)
    Vue.component('MauFormInputCheckBox', MauFormInputCheckBox)
    Vue.component('MauFormGroupCheckBoxes', MauFormGroupCheckBoxes)
    Vue.component('MauFormGroupTime', MauFormGroupTime)
    Vue.component('MauFormGroupRadio', MauFormGroupRadio)
    Vue.component('MauModal', MauModal)
  }
}

export default MauComponentsPlugin
