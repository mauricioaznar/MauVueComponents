<template>
    <div class="mau-form-input-number-container">
        <label
                v-if="label"
        >
            {{ label }}
        </label>
        <masked-input
                class="form-control mau-form-input-number"
                v-model="numberString"
                :mask="mask"
                :disabled="disabled"
                :placeholder="placeholder"
                :class="getBootstrapValidationClass(error)">
        </masked-input>
        <div class="invalid-feedback">
                  <span v-show="error" class="help is-danger">
                    {{error}}
                  </span>
        </div>
    </div>
</template>

<script>
import ValidatorHelper from '../functions/ValidatorHelper'
import Masks from '../functions/Masks'
import cleanNumber from '../functions/cleanNumber'
import MaskedInput from 'vue-text-mask'
export default {
  name: 'MauFormInputNumber',
  data () {
    return {
      numberString: '',
      mask: ''
    }
  },
  components: {
    MaskedInput
  },
  created () {
    if (Number(this.initialValue) >= 0 || Number(this.initialValue) <= 0) {
      let initialNumberString = Number(this.initialValue).toString()
      this.numberString = initialNumberString
      this.updateValue(initialNumberString)
    }
    if (this.type === 'regular') {
      this.mask = this.negative ? Masks.regularNumberNegative : Masks.regularNumber
    }
    if (this.type === 'quantity') {
      this.mask = this.negative ? Masks.quantityNumberNegative : Masks.quantityNumber
    }
    if (this.type === 'float') {
      this.mask = this.negative ? Masks.floatNumberNegative : Masks.floatNumber
    }
  },
  $_veeValidate: {
    name () {
      return this.name
    },
    value () {
      return this.numberString
    }
  },
  props: {
    value: [Number, String],
    initialValue: {
      type: [Number, String]
    },
    name: String,
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    negative: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    type: {
      type: String,
      default: 'regular',
      validator: val => {
        return (
          ['regular', 'quantity', 'float'].indexOf(val) !== -1
        )
      }
    },
    placeholder: {
      type: String,
      default: function () {
        return 'Ejemplo: 12345'
      }
    }
  },
  methods: {
    getBootstrapValidationClass: ValidatorHelper.getBootstrapValidationClass,
    updateValue (numberString) {
      let cleanedNumber = numberString !== '' ? cleanNumber(numberString) : ''
      this.$emit('input', cleanedNumber)
    }
  },
  watch: {
    numberString: function (val) {
      this.updateValue(val)
    }
  }
}
</script>

<style>
  .mau-form-input-number-container .mau-form-input-number {
    height: 38px;
  }
</style>
