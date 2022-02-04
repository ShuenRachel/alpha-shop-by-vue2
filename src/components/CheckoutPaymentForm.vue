<template>
  <div class="part part-payment">
    <div class="form-title">付款資訊</div>
    <div class="form-row">
      <div class="form-item">
        <label for="p-name">持卡人姓名</label>
        <input type="text" id="p-name" name="p-name" placeholder="John Doe" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-item">
        <label for="p-card">卡號</label>
        <input
          type="text"
          id="p-card"
          name="p-card"
          placeholder="1111 2222 3333 4444"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-item">
        <label for="p-date">有效期限</label>
        <input type="text" id="p-date" name="p-date" placeholder="MM/YY" />
      </div>
      <div class="form-item">
        <label for="p-cvc">CVC / CCV</label>
        <input type="text" id="p-cvc" name="p-cvc" placeholder="123" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.part-payment {
  .form-row {
    @extend %form-row;
    &:nth-child(4) {
      .form-item {
        &:nth-child(1) {
          flex: 1;
          margin-right: 10px;
        }
        &:nth-child(2) {
          flex: 1;
        }
      }
    }
    .form-item {
      // flex: 1;
      width: 70%;
      label {
        @extend %label-style;
      }
      input {
        -webkit-appearance: none;
        @extend %input-style;
        @extend %placeholder-setting;
      }
    }
  }
}
</style>
