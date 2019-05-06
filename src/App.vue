<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="jumbotron">asdf</div>
    <div class="form-group">
      <mau-form-text-input :error="''" :initialValue="'ass'" :name="'text-input'" ></mau-form-text-input>
    </div>
  </div>
</template>

<script>
import MauFormTextInput from './components/MauFormInputText.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    MauFormTextInput
  }
}
</script>
