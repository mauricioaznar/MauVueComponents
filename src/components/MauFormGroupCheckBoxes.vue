<template>
    <div class="form-group">
        <div v-for="(availableObj, index) in availableObjects" class="form-check" :key="index">
            <mau-form-input-check-box
                    :initialValue="getInitialValue(availableObj)"
                    class="form-check-input mr-2"
                    @input="function x(result) { inputHasChanged(result, index) }">
            </mau-form-input-check-box>
            <label class="form-check-label">{{availableObj[display]}}</label>
        </div>
    </div>
</template>

<script>
import MauFormInputCheckBox from './MauFormInputCheckBox'
export default {
  name: 'MauFormGroupCheckBoxes',
  data () {
    return {
      selectedObjects: []
    }
  },
  props: {
    availableObjects: {
      type: Array,
      required: true
    },
    display: {
      type: String,
      required: true
    },
    initialObjects: {
      type: Array,
      required: true
    }
  },
  created () {
    this.selectedObjects = this.initialObjects
  },
  components: {
    MauFormInputCheckBox
  },
  methods: {
    inputHasChanged: function ($event, index) {
      let availableSelectedObj = this.availableObjects[index]
      if ($event === 1) {
        let objFound = this.selectedObjects.find(sObj => {
          return sObj === availableSelectedObj
        })
        if (!objFound) {
          this.selectedObjects.push(availableSelectedObj)
        }
      } else if ($event === 0) {
        this.selectedObjects = this.selectedObjects.filter((selectedObj) => {
          return selectedObj !== availableSelectedObj
        })
      }
      this.$emit('input', this.selectedObjects)
    },
    getInitialValue: function (availableObj) {
      let objFound = this.initialObjects.find(initialObj => {
        return initialObj === availableObj
      })
      return objFound ? 1 : 0
    }
  }
}
</script>
