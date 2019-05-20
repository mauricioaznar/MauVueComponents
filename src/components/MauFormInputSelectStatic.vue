<template>
    <div class="mau-form-input-select-static-container">
        <label v-if="label">
            {{label}}
        </label>
        <vue-select
                class="form-control mau-form-input-select-static"
                :class="getBootstrapValidationClass(error)"
                v-model="selected"
                :multiple="multiselect"
                :label="displayProperty"
                :track-by="trackBy"
                :options="availableObjects"
                :clearable="hasClear"
                :disabled="disabled"
        >
            <template slot="option" slot-scope="option">
                {{option[displayProperty]}}
            </template>
            <span slot="no-options">No se encontraron resultados.</span>
        </vue-select>
        <div class="invalid-feedback">
          <span v-show="error" class="help is-danger">
            {{error}}
          </span>
        </div>
    </div>
</template>

<script>
import VueSelect from 'vue-select'
import ValidatorHelper from '../functions/ValidatorHelper'
import cloneDeep from '../functions/cloneDeep'
export default {
  name: 'MauFormInputSelectStatic',
  data () {
    return {
      selected: null
    }
  },
  $_veeValidate: {
    name () {
      return this.name
    },
    value () {
      return this.value
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    multiselect: {
      type: Boolean,
      required: false
    },
    error: {
      type: String,
      required: false
    },
    availableObjects: {
      type: Array,
      required: true
    },
    displayProperty: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    initialObject: {
      type: Object,
      default: function () {
        return {}
      }
    },
    initialObjects: {
      type: Object,
      default: function () {
        return {}
      }
    },
    trackBy: {
      type: String,
      default: function () {
        return 'value'
      },
      required: true
    },
    hasClear: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  created () {
    if (typeof this.initialObject === 'object' && Object.keys(this.initialObject).length !== 0) {
      this.selected = cloneDeep(this.initialObject)
    } else if (this.multiselect === true && this.initialObjects.length > 0) {
      this.selected = cloneDeep(this.initialObjects)
    }
  },
  components: {
    VueSelect
  },
  methods: {
    getBootstrapValidationClass: ValidatorHelper.getBootstrapValidationClass,
    updateValue: function (newValue) {
      if (newValue === null) {
        newValue = {}
      }
      this.$emit('input', newValue)
    }
  },
  watch: {
    selected: function (newValue) {
      this.updateValue(newValue)
    },
    initialObject: function (newInitialObject) {
      this.selected = newInitialObject
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/VueSelect";
  .mau-form-input-select-static-container {
    .mau-form-input-select-static {
      padding: 0;
      height: 38px;
    }
  }
</style>
