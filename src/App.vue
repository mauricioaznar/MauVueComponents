<template>
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
          :initialObject="initialObject"
          :displayProperty="'text'"
          :trackBy="'value'"
          :name="'text-input'"
          :availableObjects="availableObjects">
        </mau-form-input-select-static>
      </div>
    </div>
  </div>
</template>

<script>
import MauFormInputText from './components/MauFormInputText.vue'
import MauFormInputDate from './components/MauFormInputDate.vue'
import MauFormInputSelectStatic from './components/MauFormInputSelectStatic.vue'

export default {
  data () {
    return {
      availableObjects: [
        { value: 1, text: 'Example 1' },
        { value: 2, text: 'Example 2' },
        { value: 3, text: 'Example 3' },
        { value: 4, text: 'Example 4' }
      ],
      initialObject: { value: 1, text: 'Example 1' }
    }
  },
  components: {
    MauFormInputText,
    MauFormInputDate,
    MauFormInputSelectStatic
  }
}
</script>
