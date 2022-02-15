<template>
  <div class="part part-shipping">
    <div class="form-title">運送方式</div>
    <div class="form-row d-flex">
      <div class="form-item s-option" :class="{ checked: selectedShipment === 'standard'}" @click="selectedShipment = 'standard'">
        <input name="shipping-option" type="radio" value="standard" v-model="selectedShipment"/>
        <label class="d-flex" for="">
          <div class="s-title">
            <span class="s-title-name">標準運送</span>
            <span class="s-title-time">約 3~7 個工作天</span>
          </div>
          <div class="s-price">免費</div>
        </label>
      </div>
      <div class="form-item s-option" :class="{ checked: selectedShipment === 'dhl'}" @click="selectedShipment = 'dhl'">
        <input name="shipping-option" type="radio" value="dhl" v-model="selectedShipment" />
        <label class="d-flex" for="">
          <div class="s-title">
            <span class="s-title-name">DHL 貨運</span>
            <span class="s-title-time">48 小時內送達</span>
          </div>
          <div class="s-price">$500</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedShipment: 'standard'
    }
  },
  watch: {
    selectedShipment() {
      this.$emit('after-shipment-change', this.selectedShipment)
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.part-shipping {

  .form-item {
    border: 1px solid #f0f0f5;
    background: transparent;
    border-radius: 4px;
    width: 100%;
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    // z-index: 0;
    &:nth-child(1) {
      margin-bottom: 24px;
    }
    &.checked {
      border: 1px solid #000;
    }
    input {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #222222;
      margin-right: 20px;
      cursor: pointer;
      &:checked {
        box-shadow: inset 0 0 0 5px $light-black;
        .form-item {
          border: 1px solid $light-black;
        }
      }
    }
    label {
      flex: 1;
      display: flex;
      justify-content: space-between;
      // z-index: -10;
      .s-title {
        display: flex;
        flex-direction: column;
        &-name {
          font-size: 14px;
        }
        &-time {
          font-size: 12px;
        }
      }
      .s-price {
        padding-top: 3px;
        font-size: 14px;
      }
    }
  }
}
</style>
