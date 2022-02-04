<template>
  <div class="">
    <div id="step-control" class="stepper-wrapper">
      <div 
        class="step"
        :class="[{active: currentStep === 1}, {checked: currentStep > 1}]"
      >
        <div class="step-icon"></div>
        <div class="step-title">寄送地址</div>
      </div>
      <div 
        class="step"
        :class="[{active: currentStep === 2}, {checked: currentStep > 2}]"
      >
        <div class="step-icon"></div>
        <span class="step-line"></span>
        <div class="step-title">運送方式</div>
      </div>
      <div 
        class="step"
        :class="{active: currentStep === 3}"
      >
        <div class="step-icon"></div>
        <span class="step-line"></span>
        <div class="step-title">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.stepper-wrapper {
  height: 32px;
  @extend %element-margin;
  display: flex;
  position: relative;

  .step {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    @include getStepperNum(3);

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }

    .step-title {
      display: none;

      @media (min-width: 376px) {
        display: block;
        line-height: 16px;
        height: 16px;
        margin: auto 5px;
      }
    }

    .step-icon {
      height: 32px;
      width: 32px;
      box-sizing: border-box;
      border: 1px solid $light-grey;
      border-radius: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $light-grey;
    }

    &.checked,
    &.active {
      .step-icon {
        background-color: $black;
      }
      .step-icon::after {
        color: transparent;
        text-shadow: 0 0 0 rgb(255, 255, 255)
      }
    }

    &.checked {
      .step-icon::after {
        content: "\2714";
      }
    }

    .step-line {
      display: block;
      height: 1px;
      background-color: $light-grey;
      position: absolute;
      top: 50%;
      left: calc(-50% + 48px);
      right: calc(50% + 48px);
    }
  }
}
</style>