<template>
  <div class="mau-form-input-date-container">
    <label
            v-if="label"
            class="form__label">
      {{ label }}
    </label>
    <flat-pickr
            :key="keyValue"
            v-model="date"
            :config="config"
            @input="updateValue"
            :placeholder="'Selecciona una fecha'"
            :disabled="disabled"
            @change="updateValue"
            class="w-100 form-control mau-form-input-date"
    >
    </flat-pickr>
    <div class="invalid-feedback">
        <span v-show="error" class="help is-danger">
          {{error}}
        </span>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import { Spanish } from 'flatpickr/dist/l10n/es'
import 'flatpickr/dist/flatpickr.css'
import ValidatorHelper from '../functions/ValidatorHelper'
const rangeSeparator = ' al '
Spanish.rangeSeparator = rangeSeparator
export default {
  name: 'MauFormInputDate',
  data () {
    return {
      date: '',
      recentlyCreated: true,
      keyValue: 0,
      config: {
      },
      rangeConfig: {
        conjunction: ' - ',
        mode: 'range',
        altInputClass: '',
        locale: Spanish
      },
      dateConfig: {
        wrap: true,
        altInputClass: '',
        dateFormat: 'Y-m-d',
        locale: Spanish
      }
    }
  },
  $_veeValidate: {
    name () {
      return this.name
    },
    value () {
      return this.date
    }
  },
  props: {
    value: String,
    initialValue: String,
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    },
    label: {
      type: String
    },
    inputType: {
      type: String,
      default: function () {
        return 'date'
      },
      validator: function (date) {
        return ['date', 'range'].indexOf(date) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  components: {
    flatPickr
  },
  methods: {
    getBootstrapValidationClass: ValidatorHelper.getBootstrapValidationClass,
    updateValue: function (val) {
      this.$emit('input', val)
    }
  },
  created () {
    this.date = this.value
    if (this.initialValue && this.initialValue !== '0000-00-00') {
      this.date = this.initialValue
    }
    if (this.inputType === 'date') {
      this.config = this.dateConfig
    } else if (this.inputType === 'range') {
      this.config = this.rangeConfig
    } else {
      console.log('please specify a valid dateTime input type')
    }
    this.updateValue(this.date)
  },
  watch: {
    error: function () {
      let prevAltInputClass = this.config.altInputClass
      let bootstrapValidationClass = this.getBootstrapValidationClass(this.error)
      if (this.error !== '') {
        if (!prevAltInputClass.includes(bootstrapValidationClass)) {
          this.config.altInputClass = bootstrapValidationClass
          this.keyValue++
        }
      } else {
        this.config.altInputClass = ''
        this.keyValue++
      }
    },
    disabled: function () {
      this.keyValue++
    }
  }
}
</script>

<style lang="scss">
  .mau-form-input-date-container {
    .mau-form-input-date.form-control {
      background-color: #ffffff;
      height: 38px;
    }
    .mau-form-input-date:disabled {
      background-color: #e9ecef !important;
      cursor: default;
    }
  }
</style>
