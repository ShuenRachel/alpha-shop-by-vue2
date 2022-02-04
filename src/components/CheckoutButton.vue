<template>
    <section class="btn-panel">
    <div id="btn-control" class="btn-wrapper">
      <button 
        v-if="currentStep > 1" 
        class="btn-previous" 
        @click.stop.prevent="handleStepBackward"
      >
        上一步
      </button>
      <button 
        v-if="currentStep !== 3" 
        class="btn-next"
        @click.stop.prevent="handleStepForward"
      >
        下一步
      </button>
      <button 
        v-else 
        type="submit" 
        class="btn-next"
      >
        確認下單
      </button>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    initialCurrentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentStep: -1,
    }
  },
  created() {
    this.currentStep = this.initialCurrentStep
  },
  methods: {
    handleStepBackward() {
      if (this.currentStep <= 1) return
      this.currentStep -= 1

      this.$emit('after-step-update', this.currentStep)
    },
    handleStepForward() {
      if (this.currentStep >= 3) return
      this.currentStep += 1

      this.$emit('after-step-update', this.currentStep)
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.btn-panel {
  padding-top: 24px;
  border-top: 1px solid #E6E6EB;
  .btn-wrapper {
    display: flex;
    justify-content: space-between;

    button {
      height: 46px;
      width: 174px;
      border-radius: 8px;
      border: 1px solid transparent;
      outline: none;
    }

    .btn-previous {
      text-align: start;
      background: $body-bg;
    }

    .btn-next {
      text-align: center;
      background-color: #f67599;
      color: $body-bg;
      margin-left: auto;
    }
  }
}
</style>