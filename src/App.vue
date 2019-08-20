<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="container">
      <div class="jumbotron">asdf</div>
      <div class="form-group">
        <mau-form-input-text :error="''" :initialValue="'Ass'" :name="'text-input'" ></mau-form-input-text>
      </div>
      <div class="form-group">
        <mau-form-input-date :error="''" :initialValue="'01/01/1990'" :name="'text-input'" ></mau-form-input-date>
      </div>
      <div class="form-group">
        <mau-form-input-select-static
          :error="''"
          :initialObject="initialSelectObject"
          :displayProperty="'text'"
          :trackBy="'value'"
          :name="'text-input'"
          :availableObjects="availableObjects"
          :multiselect="false"
        >
        </mau-form-input-select-static>
      </div>
      <mau-form-group-date-time
          name="form-group-date-time"
          :error="''"
          :label="' de inicio'"
          :initialValue="'01/01/1990 00:00:00'"
          v-model="dateTime"
      ></mau-form-group-date-time>
      <mau-form-group-check-boxes
        v-model="checkBoxSelected"
        :availableObjects="availableObjects"
        :initialObjects="[availableObjects[0]]"
        :display="'text'"
      >
      </mau-form-group-check-boxes>
      <mau-form-group-radio
        v-model="radioSelected"
        :availableObjects="availableObjects"
        :initialObject="{}"
        :name="'radio'"
        :display="'text'"
        :error="''"
      >
      </mau-form-group-radio>
      <mau-form-group-time
        :initialTime="'00:00:00'"
        :name="'time'"
        v-model="timeS"
        :label="' fin'"
        :error="''"
      >
      </mau-form-group-time>
      <mau-form-input-number
        :error="''"
        :label="''"
        :initialValue="0"
      >

      </mau-form-input-number>
      <mau-modal
        :title="'Titulo'"
      >
        <div>Somehting simple</div>
      </mau-modal>
    </div>
  </div>
</template>

<script>
import MauFormInputText from './components/MauFormInputText.vue'
import MauFormInputDate from './components/MauFormInputDate.vue'
import MauFormInputSelectStatic from './components/MauFormInputSelectStatic.vue'
import MauFormGroupDateTime from './components/MauFormGroupDateTime.vue'
import MauFormGroupCheckBoxes from './components/MauFormGroupCheckBoxes.vue'
import MauFormGroupRadio from './components/MauFormGroupRadio.vue'
import MauFormGroupTime from './components/MauFormGroupTime.vue'
import MauFormInputNumber from './components/MauFormInputNumber.vue'
import MauModal from './components/MauModal.vue'

export default {
  data () {
    return {
      availableObjects: [
        { value: 1, text: 'Example 1' },
        { value: 2, text: 'Example 2' },
        { value: 3, text: 'Example 3' },
        { value: 4, text: 'Example 4' }
      ],
      initialSelectObject: { value: 1, text: 'Example 1' },
      initialCheckBoxObjects: [],
      dateTime: '',
      timeS: '',
      checkBoxSelected: '',
      radioSelected: ''
    }
  },
  components: {
    MauFormInputText,
    MauFormInputDate,
    MauFormInputSelectStatic,
    MauFormGroupDateTime,
    MauFormGroupCheckBoxes,
    MauFormGroupRadio,
    MauFormGroupTime,
    MauFormInputNumber,
    MauModal
  }
}
</script>
