<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="container">
      <div class="jumbotron">asdf</div>
      <div class="form-group">
        <mau-form-input-text :error="''" :initialValue="'ass'" :name="'text-input'" ></mau-form-input-text>
      </div>
      <div class="form-group">
        <mau-form-input-date :error="''" :initialValue="'ass'" :name="'text-input'" ></mau-form-input-date>
      </div>
    </div>
  </div>
</template>

<script>
import MauFormInputText from './components/MauFormInputText.vue'
import MauFormInputDate from './components/MauFormInputDate.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    MauFormInputText,
    MauFormInputDate
  }
}
</script>
