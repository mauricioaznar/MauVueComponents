<template>
  <div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{title}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="close">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <slot>
                    <p>Modal body text goes here.</p>
                  </slot>
                </div>
                <div class="modal-footer">
                  <slot name="footer">
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <button class="btn btn-primary btn-sm" @click="open">Click</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    open: function () {
      this.showModal = true
    },
    close: function () {
      this.showModal = false
    }
  }
}
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
</style>
